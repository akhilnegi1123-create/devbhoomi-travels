require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('../')); // serve frontend files

// ─────────────────────────────────────────────
// MONGOOSE CONNECTION
// ─────────────────────────────────────────────
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB Connected!');
  seedAdmin();
}).catch(err => console.error('❌ MongoDB Error:', err));

// ─────────────────────────────────────────────
// SCHEMAS & MODELS
// ─────────────────────────────────────────────

// User Schema
const userSchema = new mongoose.Schema({
  id:        { type: String, default: uuidv4 },
  name:      { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  role:      { type: String, default: 'user' }, // 'user' | 'admin'
  phone:     { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);

// Booking Schema
const bookingSchema = new mongoose.Schema({
  id:          { type: String, default: uuidv4 },
  userId:      { type: String, required: true },
  userName:    { type: String },
  userEmail:   { type: String },
  packageId:   { type: String, required: true },
  packageName: { type: String },
  price:       { type: Number },
  travelers:   { type: Number, default: 1 },
  travelDate:  { type: String },
  status:      { type: String, default: 'pending' }, // pending | confirmed | cancelled
  paymentMode: { type: String, default: 'offline' },
  notes:       { type: String, default: '' },
  createdAt:   { type: Date, default: Date.now }
});
const Booking = mongoose.model('Booking', bookingSchema);

// Contact/Query Schema
const contactSchema = new mongoose.Schema({
  id:        { type: String, default: uuidv4 },
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  phone:     { type: String, default: '' },
  subject:   { type: String, default: '' },
  message:   { type: String, required: true },
  status:    { type: String, default: 'unread' }, // unread | read | replied
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// Review Schema
const reviewSchema = new mongoose.Schema({
  id:          { type: String, default: uuidv4 },
  userId:      { type: String },
  userName:    { type: String, required: true },
  packageId:   { type: String },
  packageName: { type: String },
  rating:      { type: Number, required: true, min: 1, max: 5 },
  comment:     { type: String, required: true },
  approved:    { type: Boolean, default: false },
  createdAt:   { type: Date, default: Date.now }
});
const Review = mongoose.model('Review', reviewSchema);

// ─────────────────────────────────────────────
// SEED ADMIN USER
// ─────────────────────────────────────────────
async function seedAdmin() {
  try {
    const existing = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (!existing) {
      const hashed = await bcrypt.hash(process.env.ADMIN_PASS, 10);
      await User.create({
        name: 'Admin',
        email: process.env.ADMIN_EMAIL,
        password: hashed,
        role: 'admin'
      });
      console.log('✅ Admin user created:', process.env.ADMIN_EMAIL);
    } else {
      console.log('ℹ️  Admin already exists');
    }
  } catch (err) {
    console.error('Seed error:', err.message);
  }
}

// ─────────────────────────────────────────────
// MIDDLEWARE — Auth
// ─────────────────────────────────────────────
function authMiddleware(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

function adminMiddleware(req, res, next) {
  if (req.user?.role !== 'admin') return res.status(403).json({ error: 'Admin only' });
  next();
}

// ─────────────────────────────────────────────
// AUTH ROUTES
// ─────────────────────────────────────────────

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ error: 'Name, email, password required' });

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: 'Email already registered' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, phone: phone || '' });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ message: 'Registered successfully', token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: 'Invalid email or password' });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ message: 'Login successful', token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Profile
app.get('/api/auth/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// BOOKING ROUTES
// ─────────────────────────────────────────────

// Create Booking
app.post('/api/bookings', authMiddleware, async (req, res) => {
  try {
    const { packageId, packageName, price, travelers, travelDate, paymentMode, notes } = req.body;
    if (!packageId) return res.status(400).json({ error: 'Package ID required' });

    const booking = await Booking.create({
      userId: req.user.id,
      userName: req.user.name,
      userEmail: req.user.email,
      packageId, packageName, price,
      travelers: travelers || 1,
      travelDate, paymentMode, notes
    });

    res.json({ message: 'Booking created!', booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get My Bookings
app.get('/api/bookings/my', authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin — Get All Bookings
app.get('/api/admin/bookings', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin — Update Booking Status
app.patch('/api/admin/bookings/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json({ message: 'Status updated', booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// CONTACT ROUTES
// ─────────────────────────────────────────────

// Submit Contact Form (public)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: 'Name, email, message required' });

    const contact = await Contact.create({ name, email, phone, subject, message });
    res.json({ message: 'Message received! We will contact you soon.', contact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin — Get All Contacts
app.get('/api/admin/contacts', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin — Mark Contact as Read
app.patch('/api/admin/contacts/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!contact) return res.status(404).json({ error: 'Contact not found' });
    res.json({ message: 'Updated', contact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// REVIEW ROUTES
// ─────────────────────────────────────────────

// Submit Review (auth required)
app.post('/api/reviews', authMiddleware, async (req, res) => {
  try {
    const { packageId, packageName, rating, comment } = req.body;
    if (!rating || !comment) return res.status(400).json({ error: 'Rating and comment required' });

    const review = await Review.create({
      userId: req.user.id,
      userName: req.user.name,
      packageId, packageName, rating, comment
    });
    res.json({ message: 'Review submitted! Pending approval.', review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Approved Reviews (public)
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find({ approved: true }).sort({ createdAt: -1 }).limit(20);
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin — Get All Reviews
app.get('/api/admin/reviews', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Admin — Approve Review
app.patch('/api/admin/reviews/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { approved } = req.body;
    const review = await Review.findByIdAndUpdate(req.params.id, { approved }, { new: true });
    if (!review) return res.status(404).json({ error: 'Review not found' });
    res.json({ message: 'Review updated', review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// ADMIN — DASHBOARD STATS
// ─────────────────────────────────────────────
app.get('/api/admin/stats', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const [totalUsers, totalBookings, pendingBookings, totalContacts, unreadContacts, pendingReviews] = await Promise.all([
      User.countDocuments({ role: 'user' }),
      Booking.countDocuments(),
      Booking.countDocuments({ status: 'pending' }),
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'unread' }),
      Review.countDocuments({ approved: false })
    ]);
    res.json({ totalUsers, totalBookings, pendingBookings, totalContacts, unreadContacts, pendingReviews });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// ADMIN — USER MANAGEMENT
// ─────────────────────────────────────────────
app.get('/api/admin/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/admin/users/:id', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─────────────────────────────────────────────
// START SERVER
// ─────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 DevBhoomi Backend running at http://localhost:${PORT}`);
  console.log(`📋 API Endpoints ready!`);
});