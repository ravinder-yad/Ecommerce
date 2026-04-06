import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, resetStatus } from '../../redux/slices/authSlice';
import toast from 'react-hot-toast';
import SocialLogin from './SocialLogin';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, success } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  // Handle Success/Error Notifications
  useEffect(() => {
     if (success) {
        toast.success('Welcome back to ShopVerse!');
        dispatch(resetStatus());
        navigate('/'); // Redirect to Home
     }
     if (error) {
        toast.error(error);
        dispatch(resetStatus());
     }
  }, [success, error, navigate, dispatch]);

  const handleSubmit = (e) => {
     e.preventDefault();
     dispatch(loginUser(formData));
  };

  return (
    <div className="w-full">
      <SocialLogin />
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2 text-left">
          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-4">Email Address</label>
          <div className="relative group">
             <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-purple-600 transition-colors">
                <Mail size={18} />
             </div>
             <input 
               type="email" 
               required
               value={formData.email}
               onChange={(e) => setFormData({...formData, email: e.target.value})}
               placeholder="Enter your email"
               className="w-full bg-zinc-50 border border-zinc-100 rounded-[24px] pl-16 pr-8 py-5 text-sm font-bold text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm"
             />
          </div>
        </div>

        <div className="space-y-2 text-left">
          <div className="flex items-center justify-between px-4">
             <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Password</label>
             <Link to="/forgot-password" size="small" className="text-[9px] font-black text-purple-600 hover:text-purple-700 uppercase tracking-widest">Forgot?</Link>
          </div>
          <div className="relative group">
             <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-purple-600 transition-colors">
                <Lock size={18} />
             </div>
             <input 
               type={showPassword ? "text" : "password"} 
               required
               value={formData.password}
               onChange={(e) => setFormData({...formData, password: e.target.value})}
               placeholder="••••••••"
               className="w-full bg-zinc-50 border border-zinc-100 rounded-[24px] pl-16 pr-14 py-5 text-sm font-bold text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm"
             />
             <button 
               type="button"
               onClick={() => setShowPassword(!showPassword)}
               className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-zinc-600 transition-colors"
             >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
             </button>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-2">
           <input type="checkbox" id="remember" className="w-4 h-4 rounded-md border-zinc-200 accent-purple-600" />
           <label htmlFor="remember" className="text-[10px] font-black text-zinc-500 uppercase tracking-widest cursor-pointer select-none">Remember Me</label>
        </div>

        <button 
          type="submit"
          disabled={isLoading}
          className="w-full bg-zinc-950 text-white font-black py-6 rounded-[28px] uppercase tracking-[0.2em] text-[10px] shadow-2xl transition-all hover:bg-purple-600 flex items-center justify-center gap-4 group active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
           {isLoading ? 'Logging In...' : 'Login To Account'} <LogIn size={16} className={isLoading ? 'animate-pulse' : 'group-hover:translate-x-1 transition-transform'} />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
