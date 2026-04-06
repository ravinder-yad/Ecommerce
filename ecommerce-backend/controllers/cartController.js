import Cart from '../models/Cart.js';

export const getMyCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });
  if (cart) {
    res.json(cart);
  } else {
    res.json({ cartItems: [] });
  }
};


export const updateCart = async (req, res) => {
  const { cartItems } = req.body;

  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    cart.cartItems = cartItems;
    const updatedCart = await cart.save();
    res.json(updatedCart);
  } else {
    const newCart = new Cart({
      user: req.user._id,
      cartItems,
    });
    const createdCart = await newCart.save();
    res.status(201).json(createdCart);
  }
};


export const clearCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    cart.cartItems = [];
    await cart.save();
    res.json({ message: 'Cart cleared' });
  } else {
    res.status(404).json({ message: 'Cart not found' });
  }
};
