require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postRoutes');

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors({ credentials: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => res.send('📢 Post Sharing API Running'));

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server on http://localhost:${PORT}`));
});
