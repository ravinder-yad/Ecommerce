import express from 'express';
import {
  getMyCart,
  updateCart,
  clearCart,
} from '../controllers/cartController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(protect, getMyCart)
  .post(protect, updateCart)
  .delete(protect, clearCart);

export default router;
