import express from 'express';
import {
  getUserProfile,
  updateUserProfile,
  uploadProfilePhoto,
  upload,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.post('/upload', protect, upload.single('image'), uploadProfilePhoto);

export default router;
