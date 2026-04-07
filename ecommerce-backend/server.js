import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { connectDB } from './config/db.js';
import { trackActivity } from './middleware/activityMiddleware.js';

// 🚀 Routes Imports
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import wishlistRoutes from './routes/wishlistRoutes.js';

dotenv.config();

// 💂‍♂️ Initialize SQL Treasury (Professional-Grade Registry)
connectDB();

const app = express();
const httpServer = createServer(app);

// ⚡ Socket.io Real-time Channel (Police-Grade Streaming)
const io = new Server(httpServer, {
  cors: {
    origin: '*', // Allow all for development flexibility
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

// 🚔 Apply Global Activity Tracker Intelligence
app.use(trackActivity(io));

// 🛡️ API Endpoints
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/wishlist', wishlistRoutes);

const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, () => {
  console.log(`🏰 ShopVerse Command Center: Real-time Registry Active on Port ${PORT}`);
});

// 🔒 Digital Handshake Verification
io.on('connection', (socket) => {
  console.log('💂‍♂️ Guard Connected: New Surveillance Stream Active.');
  
  socket.on('disconnect', () => {
    console.log('💂‍♂️ Guard Disconnected: Stream Terminated.');
  });
});