import express from 'express';
import {
  getMyWishlist,
  addToWishlist,
  removeFromWishlist,
} from '../controllers/wishlistController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getMyWishlist);
router.post('/:id', protect, addToWishlist);
router.delete('/:id', protect, removeFromWishlist);

export default router;
