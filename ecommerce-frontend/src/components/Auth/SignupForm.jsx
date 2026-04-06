import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Eye, EyeOff, UserPlus } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, resetStatus } from '../../redux/slices/authSlice';
import toast from 'react-hot-toast';
import SocialLogin from './SocialLogin';

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, success } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });
  const [passwordStrength, setPasswordStrength] = useState(0); 

  const checkStrength = (password) => {
     let strength = 0;
     if (password.length >= 8) strength++;
     if (/[A-Z]/.test(password)) strength++;
     if (/[0-9]/.test(password)) strength++;
     if (/[^A-Za-z0-9]/.test(password)) strength++;
     return strength;
  };

  useEffect(() => {
     setPasswordStrength(checkStrength(formData.password));
  }, [formData.password]);

  // Handle Success/Error Notifications
  useEffect(() => {
     if (success) {
        toast.success(`Welcome to ShopVerse, ${formData.fullName.split(' ')[0]}! ✨`);
        dispatch(resetStatus());
        navigate('/dashboard'); // 🚀 Auto-login redirect to Dashboard
     }
     if (error) {
        toast.error(error);
        dispatch(resetStatus());
     }
  }, [success, error, navigate, dispatch]);

  const handleSubmit = (e) => {
     e.preventDefault();
     dispatch(registerUser({ 
        fullName: formData.fullName, 
        email: formData.email, 
        password: formData.password 
     }));
  };

  const strengthColors = ['bg-zinc-200', 'bg-rose-500', 'bg-orange-500', 'bg-yellow-500', 'bg-emerald-500'];
  const strengthLabels = ['Too Weak', 'Weak', 'Medium', 'Strong', 'Master'];

  return (
    <div className="w-full">
      <SocialLogin />
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2 text-left">
          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-4">Full Name</label>
          <div className="relative group">
             <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-purple-600 transition-colors">
                <User size={18} />
             </div>
             <input 
               type="text" 
               required
               value={formData.fullName}
               onChange={(e) => setFormData({...formData, fullName: e.target.value})}
               placeholder="Vikram Singh"
               className="w-full bg-zinc-50 border border-zinc-100 rounded-[22px] pl-16 pr-8 py-4.5 text-sm font-bold text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm"
             />
          </div>
        </div>

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
               placeholder="vikram@shopverse.com"
               className="w-full bg-zinc-50 border border-zinc-100 rounded-[22px] pl-16 pr-8 py-4.5 text-sm font-bold text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm"
             />
          </div>
        </div>

        <div className="space-y-2 text-left">
          <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest pl-4">Create Password</label>
          <div className="relative group">
             <div className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-purple-600 transition-colors">
                <Lock size={18} />
             </div>
             <input 
               type={showPassword ? "text" : "password"} 
               required
               value={formData.password}
               onChange={(e) => setFormData({...formData, password: e.target.value})}
               placeholder="Minimum 8 characters"
               className="w-full bg-zinc-50 border border-zinc-100 rounded-[22px] pl-16 pr-14 py-4.5 text-sm font-bold text-zinc-950 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm"
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

        <div className="flex gap-1.5 px-4 h-1">
           {[1, 2, 3, 4].map((step) => (
             <div 
               key={step}
               className={`flex-1 rounded-full transition-all duration-500 ${passwordStrength >= step ? strengthColors[passwordStrength] : 'bg-zinc-100'}`}
             ></div>
           ))}
        </div>
        <p className={`text-[8px] font-black uppercase tracking-widest pl-4 transition-colors ${passwordStrength > 0 ? strengthLabels[passwordStrength] === 'Too Weak' ? 'text-rose-500' : 'text-zinc-400' : 'text-zinc-400'}`}>
           Security: {strengthLabels[passwordStrength]}
        </p>

        <div className="flex items-start gap-3 px-4 py-2">
           <input type="checkbox" required id="terms" className="w-4 h-4 rounded-md border-zinc-200 accent-purple-600 mt-0.5" />
           <label htmlFor="terms" className="text-[9px] font-black text-zinc-500 uppercase tracking-widest cursor-pointer leading-relaxed">
             I agree to the <span className="text-zinc-950 underline decoration-zinc-100 underline-offset-4">Terms of service</span> and <span className="text-zinc-950 underline decoration-zinc-100 underline-offset-4">Privacy Policy</span>.
           </label>
        </div>

        <button 
          type="submit"
          disabled={isLoading}
          className="w-full bg-zinc-950 text-white font-black py-5.5 rounded-[26px] uppercase tracking-[0.2em] text-[10px] shadow-2xl transition-all hover:bg-purple-600 flex items-center justify-center gap-4 group active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
           {isLoading ? 'Creating Account...' : 'Create VIP Account'} <UserPlus size={16} className={isLoading ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'} />
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
