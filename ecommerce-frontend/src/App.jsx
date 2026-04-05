import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import Deals from './pages/Deals';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import MyOrders from './pages/MyOrders';
import Wishlist from './pages/Wishlist';
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';

// Footer & Legal Pages
import OrderTracking from './pages/Support/OrderTracking';
import FAQ from './pages/Support/FAQ';
import SizeGuide from './pages/Support/SizeGuide';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsOfService from './pages/Legal/TermsOfService';
import ShippingPolicy from './pages/Legal/ShippingPolicy';
import ReturnPolicy from './pages/Legal/ReturnPolicy';

import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="categories" element={<Categories />} />
          <Route path="deals" element={<Deals />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-success" element={<OrderSuccess />} />
          
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="wishlist" element={<Wishlist />} />
          
          <Route path="search" element={<SearchResults />} />
          
          {/* Footer & Information Routes */}
          <Route path="track-order" element={<OrderTracking />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="size-guide" element={<SizeGuide />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="shipping-policy" element={<ShippingPolicy />} />
          <Route path="return-policy" element={<ReturnPolicy />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
