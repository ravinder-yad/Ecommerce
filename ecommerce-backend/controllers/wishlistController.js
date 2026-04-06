import Wishlist from '../models/Wishlist.js';


export const getMyWishlist = async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id }).populate('products');
  if (wishlist) {
    res.json(wishlist);
  } else {
    res.json({ products: [] });
  }
};


export const addToWishlist = async (req, res) => {
  const productId = req.params.id;

  const wishlist = await Wishlist.findOne({ user: req.user._id });

  if (wishlist) {
    if (wishlist.products.includes(productId)) {
      return res.status(400).json({ message: 'Product already in wishlist' });
    }
    wishlist.products.push(productId);
    const updatedWishlist = await wishlist.save();
    res.json(updatedWishlist);
  } else {
    const newWishlist = new Wishlist({
      user: req.user._id,
      products: [productId],
    });
    const createdWishlist = await newWishlist.save();
    res.status(201).json(createdWishlist);
  }
};


export const removeFromWishlist = async (req, res) => {
  const productId = req.params.id;

  const wishlist = await Wishlist.findOne({ user: req.user._id });

  if (wishlist) {
    wishlist.products = wishlist.products.filter(id => id.toString() !== productId);
    const updatedWishlist = await wishlist.save();
    res.json(updatedWishlist);
  } else {
    res.status(404).json({ message: 'Wishlist not found' });
  }
};
