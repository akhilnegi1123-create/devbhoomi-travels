require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');
const jwt      = require('jsonwebtoken');
const cors     = require('cors');
const Contact  = require('./models/contact');
const { v4: uuidv4 } = require('uuid');

const app = express();
const START_TIME = Date.now();

app.use(cors({ origin: '*', methods: ['GET','POST','PUT','PATCH','DELETE'], allowedHeaders: ['Content-Type','Authorization'] }));
app.use(express.json());
app.use(express.static('../'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => { console.log('✅ MongoDB Connected!'); seedAdmin(); })
  .catch(err => console.error('❌ MongoDB Error:', err));

// ── SCHEMAS ──
const userSchema = new mongoose.Schema({
  id:        { type: String, default: () => uuidv4() },
  name:      { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  role:      { type: String, default: 'user' },
  phone:     { type: String, default: '' },
  initials:  { type: String, default: '' },
  isActive:  { type: Boolean, default: true },
  lastLogin: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

const bookingSchema = new mongoose.Schema({
  id:              { type: String, default: () => uuidv4() },
  bookingId:       { type: String, default: () => 'BK-' + Date.now().toString().slice(-6) },
  userId:          { type: String, default: 'guest' },
  packageKey:      { type: String, default: '' },
  packageName:     { type: String, default: '' },
  packagePrice:    { type: String, default: '' },
  name:            { type: String, required: true },
  phone:           { type: String, required: true },
  email:           { type: String, default: '' },
  travelDate:      { type: String },
  persons:         { type: Number, default: 1 },
  totalAmount:     { type: Number, default: 0 },
  gstAmount:       { type: Number, default: 0 },
  finalAmount:     { type: Number, default: 0 },
  specialRequests: { type: String, default: '' },
  source:          { type: String, default: 'website' },
  status:          { type: String, default: 'Query Received' },
  createdAt:       { type: Date, default: Date.now }
});
const Booking = mongoose.model('Booking', bookingSchema);

const contactSchema = new mongoose.Schema({
  id:         { type: String, default: () => uuidv4() },
  ticketId:   { type: String, default: () => 'TKT-' + Date.now().toString().slice(-6) },
  firstName:  { type: String, default: '' },
  lastName:   { type: String, default: '' },
  name:       { type: String, default: '' },
  email:      { type: String, required: true },
  phone:      { type: String, default: '' },
  package:    { type: String, default: '' },
  travelDate: { type: String, default: null },
  travelers:  { type: Number, default: 1 },
  message:    { type: String, required: true },
  status:     { type: String, default: 'New' },
  createdAt:  { type: Date, default: Date.now }
});

const reviewSchema = new mongoose.Schema({
  id:          { type: String, default: () => uuidv4() },
  name:        { type: String, required: true },
  city:        { type: String, default: '' },
  initials:    { type: String, default: '' },
  packageKey:  { type: String, default: '' },
  packageName: { type: String, default: '' },
  rating:      { type: Number, required: true, min: 1, max: 5 },
  text:        { type: String, required: true },
  approved:    { type: Boolean, default: false },
  createdAt:   { type: Date, default: Date.now }
});
const Review = mongoose.model('Review', reviewSchema);

const newsletterSchema = new mongoose.Schema({
  id:           { type: String, default: () => uuidv4() },
  email:        { type: String, required: true, unique: true },
  source:       { type: String, default: 'website' },
  isActive:     { type: Boolean, default: true },
  subscribedAt: { type: Date, default: Date.now },
  createdAt:    { type: Date, default: Date.now }
});
const Newsletter = mongoose.model('Newsletter', newsletterSchema);

// ── SEED ADMIN ──
async function seedAdmin() {
  try {
    const existing = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (!existing) {
      const hashed = await bcrypt.hash(process.env.ADMIN_PASS, 10);
      await User.create({ name: 'Admin', email: process.env.ADMIN_EMAIL, password: hashed, role: 'admin', initials: 'AD' });
      console.log('✅ Admin created:', process.env.ADMIN_EMAIL);
    } else { console.log('ℹ️  Admin already exists'); }
  } catch (err) { console.error('Seed error:', err.message); }
}

// ── MIDDLEWARE ──
function authMiddleware(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ success: false, message: 'Login karein pehle' });
  try { req.user = jwt.verify(token, process.env.JWT_SECRET); next(); }
  catch { res.status(401).json({ success: false, message: 'Session expire ho gaya' }); }
}

// ── HEALTH CHECK ──
app.get('/api/health', (req, res) => {
  const uptime = Math.floor((Date.now() - START_TIME) / 1000);
  res.json({ success: true, data: {
    time: new Date().toLocaleString('en-IN'),
    uptime: `${Math.floor(uptime/60)}m ${uptime%60}s`,
    framework: 'Express.js', database: 'MongoDB Atlas',
    dbPath: process.env.MONGO_URI?.split('@')[1]?.split('/')[0] || 'Atlas',
    version: '2.1.0'
  }});
});

// ── STATS (admin panel: GET /stats) ──
app.get('/api/stats', async (req, res) => {
  try {
    const [totalUsers, totalBookings, pendingBookings, totalContacts,
           unreadContacts, pendingReviews, newsletterSubs] = await Promise.all([
      User.countDocuments({ role: 'user' }),
      Booking.countDocuments(),
      Booking.countDocuments({ status: 'Query Received' }),
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'New' }),
      Review.countDocuments({ approved: false }),
      Newsletter.countDocuments({ isActive: true })
    ]);
    res.json({ success: true, data: { totalUsers, totalBookings, pendingBookings, totalContacts, unreadContacts, pendingReviews, newsletterSubs } });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// ── AUTH ──
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ success: false, message: 'Naam, email aur password zaroori hai' });
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ success: false, message: 'Yeh email pehle se registered hai' });
    const hashed  = await bcrypt.hash(password, 10);
    const initials = name.trim().split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const user = await User.create({ name, email, password: hashed, phone: phone || '', initials });
    const token = jwt.sign({ id: user._id, email: user.email, role: user.role, name: user.name, initials }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, message: 'Account ban gaya! Welcome ' + user.name, token, user: { name: user.name, email: user.email, role: user.role, initials } });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, message: 'Email ya password galat hai' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ success: false, message: 'Email ya password galat hai' });
    await User.findByIdAndUpdate(user._id, { lastLogin: new Date() });
    const initials = user.initials || user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const token = jwt.sign({ id: user._id, email: user.email, role: user.role, name: user.name, initials }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, message: 'Welcome back, ' + user.name + '!', token, user: { name: user.name, email: user.email, role: user.role, initials } });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

app.get('/api/auth/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ success: false, message: 'User nahi mila' });
    res.json({ success: true, user });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "All fields required"
      });
    }

    const newContact = new Contact({ name, email });
    await newContact.save();

    res.json({
      success: true,
      message: "Message received successfully"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// 👇 YEH YAHI DALNA HAI
app.get('/contacts/all', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: contacts
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});
// ── BOOKINGS ──
app.post('/api/bookings', async (req, res) => {
  try {
    const { packageKey, packageName, packagePrice, name, phone, email,
            travelDate, persons, totalAmount, gstAmount, finalAmount, specialRequests, source } = req.body;
    if (!name || name.length < 2) return res.status(400).json({ success: false, message: 'Naam likhein' });
    if (!phone) return res.status(400).json({ success: false, message: 'Phone number likhein' });
    let userId = 'guest';
    const token = req.headers['authorization']?.split(' ')[1];
    if (token) { try { userId = jwt.verify(token, process.env.JWT_SECRET).id; } catch {} }
    const booking = await Booking.create({ userId, packageKey, packageName, packagePrice, name, phone, email: email || '', travelDate, persons: persons || 1, totalAmount, gstAmount, finalAmount, specialRequests: specialRequests || '', source: source || 'website' });
    res.json({ success: true, message: 'Booking query submit ho gayi!', bookingId: booking.bookingId });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Admin — all bookings (admin panel: GET /bookings/all)
app.get('/api/bookings/all', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, data: bookings });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

app.get('/api/bookings/my', authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, data: bookings });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Admin — update status (admin panel: PUT /bookings/:id/status)
app.put('/api/bookings/:id/status', async (req, res) => {
  try {
    const booking = await Booking.findOneAndUpdate({ id: req.params.id }, { status: req.body.status }, { new: true });
    if (!booking) return res.status(404).json({ success: false, message: 'Booking nahi mili' });
    res.json({ success: true, message: 'Status update ho gaya', booking });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// ── CONTACTS ──
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, name, email, phone, package: pkg, travelDate, travelers, message } = req.body;
    const fullName = name || (firstName ? (firstName + ' ' + (lastName || '')).trim() : '');
    if (!fullName || fullName.length < 2) return res.status(400).json({ success: false, message: 'Naam likhein' });
    if (!email || !email.includes('@')) return res.status(400).json({ success: false, message: 'Valid email likhein' });
    if (!message || message.length < 5) return res.status(400).json({ success: false, message: 'Message likhein' });
    const contact = await Contact.create({ firstName: firstName || fullName, lastName: lastName || '', name: fullName, email, phone: phone || '', package: pkg || '', travelDate: travelDate || null, travelers: travelers || 1, message });
    res.json({ success: true, message: 'Message mil gaya! Hum 24 ghante mein reply karenge.', ticketId: contact.ticketId });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Admin — all contacts (admin panel: GET /contacts/all)
app.get('/api/contacts/all', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Admin — update status (admin panel: PUT /contacts/:ticketId/status)
app.put('/api/contacts/:ticketId/status', async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate({ ticketId: req.params.ticketId }, { status: req.body.status }, { new: true });
    if (!contact) return res.status(404).json({ success: false, message: 'Contact nahi mila' });
    res.json({ success: true, message: 'Status update ho gaya', contact });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Admin — log reply (admin panel: POST /contacts/:ticketId/reply)
app.post('/api/contacts/:ticketId/reply', async (req, res) => {
  try {
    await Contact.findOneAndUpdate({ ticketId: req.params.ticketId }, { status: 'Replied' });
    res.json({ success: true, message: 'Reply logged!' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// ── REVIEWS ──
app.post('/api/reviews', async (req, res) => {
  try {
    const { packageKey, packageName, name, city, rating, text } = req.body;
    if (!name || name.length < 2) return res.status(400).json({ success: false, message: 'Naam likhein' });
    if (!rating) return res.status(400).json({ success: false, message: 'Rating select karein' });
    if (!text || text.length < 10) return res.status(400).json({ success: false, message: 'Review thodi lambi likhein' });
    const initials = name.trim().split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    await Review.create({ name, city: city || '', initials, packageKey: packageKey || '', packageName: packageName || '', rating: parseInt(rating), text });
    res.json({ success: true, message: 'Review submit ho gayi! Approve hone ke baad dikhai degi.' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

app.get('/api/reviews', async (req, res) => {
  try {
    const limit   = parseInt(req.query.limit) || 20;
    const reviews = await Review.find({ approved: true }).sort({ createdAt: -1 }).limit(limit);
    const all     = await Review.find({ approved: true });
    const avgRating = all.length ? (all.reduce((s, r) => s + r.rating, 0) / all.length).toFixed(1) : '4.9';
    res.json({ success: true, data: reviews, avgRating: parseFloat(avgRating), total: all.length });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Admin — all reviews (admin panel: GET /reviews/all)
app.get('/api/reviews/all', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json({ success: true, data: reviews });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Admin — approve (admin panel: PUT /reviews/:id/approve)
app.put('/api/reviews/:id/approve', async (req, res) => {
  try {
    const review = await Review.findOneAndUpdate({ id: req.params.id }, { approved: true }, { new: true });
    if (!review) return res.status(404).json({ success: false, message: 'Review nahi mili' });
    res.json({ success: true, message: 'Review approve ho gayi ✅', review });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Admin — delete (admin panel: DELETE /reviews/:id/delete)
app.delete('/api/reviews/:id/delete', async (req, res) => {
  try {
    await Review.findOneAndDelete({ id: req.params.id });
    res.json({ success: true, message: 'Review delete ho gayi' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// ── USERS ──
// Admin — all users (admin panel: GET /users/all)
app.get('/api/users/all', async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json({ success: true, data: users });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Admin — toggle active (admin panel: PUT /users/:id/toggle)
app.put('/api/users/:id/toggle', async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    if (!user) return res.status(404).json({ success: false, message: 'User nahi mila' });
    await User.findOneAndUpdate({ id: req.params.id }, { isActive: !user.isActive });
    res.json({ success: true, message: 'User ' + (!user.isActive ? 'enabled' : 'disabled') });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// ── NEWSLETTER ──
app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    const { email, source } = req.body;
    if (!email || !email.includes('@')) return res.status(400).json({ success: false, message: 'Valid email likhein' });
    const exists = await Newsletter.findOne({ email });
    if (exists) return res.json({ success: true, message: 'Aap pehle se subscribe hain!' });
    await Newsletter.create({ email, source: source || 'website' });
    res.json({ success: true, message: 'Subscribe ho gaye! Travel updates milenge.' });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// Admin — all subscribers (admin panel: GET /newsletter/all)
app.get('/api/newsletter/all', async (req, res) => {
  try {
    const subs = await Newsletter.find().sort({ createdAt: -1 });
    res.json({ success: true, data: subs });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// ── BACKUP (admin panel: POST /admin/backup) ──
app.post('/api/admin/backup', async (req, res) => {
  try {
    const [users, bookings, contacts, reviews, newsletter] = await Promise.all([
      User.find().select('-password'), Booking.find(), Contact.find(), Review.find(), Newsletter.find()
    ]);
    res.json({ success: true, message: 'Backup ready!', file: 'backup_' + Date.now() + '.json', data: { exportedAt: new Date(), users, bookings, contacts, reviews, newsletter } });
  } catch (err) { res.status(500).json({ success: false, message: err.message }); }
});

// ── PACKAGES & DESTINATIONS (admin panel tabs) ──
app.get('/api/packages', (req, res) => {
  res.json({ success: true, data: [
    { key: 'chardham',  title: 'Char Dham Yatra',          category: 'Pilgrimage', price: '₹18,999', nights: 10, rating: 4.9, reviews: 892,  region: 'Uttarakhand' },
    { key: 'rishikesh', title: 'Rishikesh Adventure Rush', category: 'Adventure',  price: '₹8,499',  nights: 4,  rating: 4.8, reviews: 1243, region: 'Rishikesh' },
    { key: 'vof',       title: 'Valley of Flowers Trek',   category: 'Trek',       price: '₹12,999', nights: 7,  rating: 4.9, reviews: 567,  region: 'Chamoli' },
    { key: 'kedarnath', title: 'Kedarnath Yatra',          category: 'Pilgrimage', price: '₹11,499', nights: 5,  rating: 4.9, reviews: 1087, region: 'Rudraprayag' },
    { key: 'mussoorie', title: 'Mussoorie Weekend Escape', category: 'Leisure',    price: '₹5,999',  nights: 2,  rating: 4.7, reviews: 743,  region: 'Mussoorie' },
    { key: 'auli',      title: 'Auli Ski & Snow',          category: 'Adventure',  price: '₹14,999', nights: 5,  rating: 4.8, reviews: 389,  region: 'Chamoli' },
    { key: 'nainital',  title: 'Nainital Lake Retreat',    category: 'Leisure',    price: '₹6,499',  nights: 3,  rating: 4.7, reviews: 921,  region: 'Nainital' },
    { key: 'hemkund',   title: 'Hemkund Sahib Yatra',      category: 'Pilgrimage', price: '₹9,999',  nights: 4,  rating: 4.9, reviews: 312,  region: 'Chamoli' },
    { key: 'corbett',   title: 'Jim Corbett Safari',       category: 'Wildlife',   price: '₹13,499', nights: 3,  rating: 4.8, reviews: 678,  region: 'Corbett' },
    { key: 'dehradun',  title: 'Dehradun City & Hills',    category: 'Leisure',    price: '₹4,999',  nights: 2,  rating: 4.6, reviews: 445,  region: 'Dehradun' },
    { key: 'haridwar',  title: 'Haridwar Ganga Aarti',     category: 'Pilgrimage', price: '₹3,999',  nights: 2,  rating: 4.8, reviews: 1120, region: 'Haridwar' },
    { key: 'chopta',    title: 'Chopta Tungnath Trek',     category: 'Trek',       price: '₹7,999',  nights: 3,  rating: 4.9, reviews: 298,  region: 'Rudraprayag' },
    { key: 'gangotri',  title: 'Gangotri Yamunotri',       category: 'Pilgrimage', price: '₹13,999', nights: 6,  rating: 4.8, reviews: 534,  region: 'Uttarkashi' }
  ]});
});

app.get('/api/destinations', (req, res) => {
  res.json({ success: true, data: [
    { name: 'Rishikesh',   region: 'Garhwal', type: 'Adventure & Spiritual' },
    { name: 'Mussoorie',   region: 'Garhwal', type: 'Hill Station' },
    { name: 'Nainital',    region: 'Kumaon',  type: 'Lake & Leisure' },
    { name: 'Kedarnath',   region: 'Garhwal', type: 'Pilgrimage' },
    { name: 'Auli',        region: 'Garhwal', type: 'Ski & Snow' },
    { name: 'Jim Corbett', region: 'Kumaon',  type: 'Wildlife Safari' },
    { name: 'Haridwar',    region: 'Garhwal', type: 'Pilgrimage & Ganga Aarti' },
    { name: 'Dehradun',    region: 'Garhwal', type: 'City & Hills' },
    { name: 'Chopta',      region: 'Garhwal', type: 'Trek & Meadows' }
  ]});
});

// ── START ──
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 DevBhoomi Backend: http://localhost:${PORT}`);
  console.log(`✅ Health: http://localhost:${PORT}/api/health`);
});
// deploy