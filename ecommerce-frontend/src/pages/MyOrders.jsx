import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Truck, CheckCircle, Clock, ChevronRight, ShoppingBag, Plus, RefreshCcw } from 'lucide-react';
import PageTemplate from './PageTemplate';
import { useSelector } from 'react-redux';
import OrderDetailModal from '../components/Orders/OrderDetailModal';
import toast from 'react-hot-toast';

const MyOrders = ({ isTab = false }) => {
  const { user, token } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch orders from backend
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/orders/myorders', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setOrders(data);
      } else {
        toast.error(data.message || 'Failed to fetch orders');
      }
    } catch (error) {
      console.error(error);
      toast.error('Network error. Check backend server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  // Function to generate a mock order for testing
  const createMockOrder = async () => {
    const mockOrder = {
      orderItems: [
        {
          name: 'Supreme Leather Jacket',
          qty: 1,
          image: 'https://images.unsplash.com/photo-1551028711-031cda098383?auto=format&fit=crop&q=80',
          price: 12900,
          product: '65d123456789012345678901', // Dummy ID
        },
        {
          name: 'Classic White Tee',
          qty: 2,
          image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80',
          price: 2500,
          product: '65d123456789012345678902', // Dummy ID
        },
      ],
      shippingAddress: {
        address: '42 Luxury Avenue',
        city: 'Mumbai',
        postalCode: '400001',
        country: 'India',
      },
      paymentMethod: 'Credit Card',
      itemsPrice: 17900,
      taxPrice: 1500,
      shippingPrice: 500,
      totalPrice: 19900,
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(mockOrder),
      });

      if (response.ok) {
        toast.success('Mock Order Generated! 🛒');
        fetchOrders();
      }
    } catch (error) {
      toast.error('Failed to create mock order');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Shipped': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Processing': return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-zinc-50 text-zinc-600';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered': return <CheckCircle size={14} />;
      case 'Shipped': return <Truck size={14} />;
      case 'Processing': return <Clock size={14} />;
      default: return <Package size={14} />;
    }
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const OrdersContent = (
    <div className="space-y-4 text-left w-full">
      {/* Admin/Debug Tools */}
      {!isTab && (
        <div className="mb-8 flex gap-4">
          <button
            onClick={createMockOrder}
            className="flex items-center gap-3 bg-zinc-950 text-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-purple-600 transition-all shadow-xl active:scale-95"
          >
            Generate Mock Order <Plus size={14} />
          </button>
          <button
            onClick={fetchOrders}
            className="w-12 h-12 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center text-zinc-400 hover:text-purple-600 hover:border-purple-200 transition-all active:rotate-180 duration-500"
          >
            <RefreshCcw size={18} />
          </button>
        </div>
      )}

      {loading ? (
        <div className="py-20 text-center flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Retrieving Treasury...</p>
        </div>
      ) : orders.length > 0 ? (
        orders.map((order) => (
          <motion.div
            key={order._id}
            onClick={() => handleOrderClick(order)}
            whileHover={{ y: -4, scale: 1.01 }}
            className="bg-white border border-zinc-100 rounded-[28px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-2xl transition-all shadow-sm cursor-pointer group"
          >
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 rounded-[22px] flex items-center justify-center text-zinc-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-inner">
                <Package size={24} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[11px] font-black uppercase tracking-widest text-zinc-900">#ORD-{order._id.slice(-6)}</span>
                  <div className={`px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest flex items-center gap-2 ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)} {order.status}
                  </div>
                </div>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight italic">PLACED ON {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <div className="text-right">
                <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1 text-right italic">Order Total</p>
                <p className="text-2xl font-black text-zinc-950 tracking-tighter text-right">₹{order.totalPrice.toLocaleString()}</p>
              </div>
              <div className="w-10 h-10 bg-zinc-50 border border-zinc-100 rounded-xl flex items-center justify-center text-zinc-400 group-hover:bg-zinc-950 group-hover:text-white transition-all">
                <ChevronRight size={18} />
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <div className="bg-white border border-zinc-100 rounded-[32px] p-16 text-center shadow-sm">
          <div className="w-20 h-20 bg-zinc-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-zinc-200">
            <ShoppingBag size={36} />
          </div>
          <h4 className="text-xl font-black uppercase tracking-tighter text-zinc-950 mb-3 italic">Vault is currently empty.</h4>
          <p className="text-[11px] text-zinc-400 font-medium tracking-tight mb-8 max-w-xs mx-auto">You haven't initiated any luxury transactions yet. Browse our selection to start your journey.</p>
          <button className="bg-zinc-950 text-white font-black px-10 py-4 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-purple-600 transition-all shadow-xl">Initiate Shopping</button>
        </div>
      )}

      {/* Modal Integration */}
      <OrderDetailModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );

  if (isTab) return OrdersContent;

  return (
    <PageTemplate title="Your Luxury Orders">
      <div className="max-w-5xl mx-auto py-16 px-4 md:px-8">
        <div className="mb-12 text-left">
          <h4 className="text-purple-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4">Transaction History</h4>
          <h2 className="text-5xl font-black text-zinc-950 tracking-tighter uppercase leading-none italic mb-4">Order <span className="text-purple-600">Treasury.</span></h2>
          <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest italic">Track your acquisitions and limited editions in real-time.</p>
        </div>
        {OrdersContent}
      </div>
    </PageTemplate>
  );
};

export default MyOrders;
