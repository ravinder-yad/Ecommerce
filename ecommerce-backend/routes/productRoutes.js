import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  seedProducts,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/seed', seedProducts);
router.post('/', protect, createProduct);
router.get('/:id', getProductById);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);

export default router;
