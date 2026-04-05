import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // 1. Cart State
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('sv_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('sv_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // 3. Notifications State
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Welcome to ShopVerse!', message: 'Enjoy 10% off on your first order with code SV10.', type: 'Offer', time: '2 mins ago', read: false },
    { id: 2, title: 'Flash Sale Alert! 🔥', message: '70% OFF on select luxury watches starts now.', type: 'Sale', time: '1 hour ago', read: false },
    { id: 3, title: 'Item Back in Stock', message: 'The Minimalist Tech Backpack is now available.', type: 'Update', time: '5 hours ago', read: true },
  ]);

  // Persist Cart & Wishlist
  useEffect(() => {
    localStorage.setItem('sv_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('sv_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Helper Methods
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Remove from wishlist if added to cart (optional behavior)
    removeFromWishlist(product.id);
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const index = prev.findIndex(item => item.id === product.id);
      if (index === -1) return [...prev, product];
      return prev.filter(item => item.id !== product.id);
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <AppContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount,
      wishlist, toggleWishlist, removeFromWishlist,
      notifications, markAsRead, clearNotifications, unreadCount
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
