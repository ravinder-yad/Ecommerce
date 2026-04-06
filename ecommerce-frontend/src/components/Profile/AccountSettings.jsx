import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ShieldCheck, Save, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

const AccountSettings = ({ user }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
     fullName: user?.fullName || '',
     email: user?.email || '',
     currentPassword: '',
     newPassword: '',
     confirmPassword: ''
  });

  const handleUpdateProfile = (e) => {
     e.preventDefault();
     toast.success('Profile updated successfully! ✨');
  };

  const handleUpdatePassword = (e) => {
     e.preventDefault();
     toast.success('Security settings updated! 🛡️');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6 text-left"
    >
      {/* Personal Info Card */}
      <div className="bg-white border border-zinc-100 rounded-[32px] p-8 shadow-sm">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
              <User size={20} />
           </div>
           <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-950 leading-none mb-1">Personal Identity</h4>
              <p className="text-[10px] text-zinc-400 font-medium tracking-tight">Update your public profile details</p>
           </div>
        </div>

        <form onSubmit={handleUpdateProfile} className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="space-y-2">
              <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest ml-4">Full Legal Name</label>
              <input 
                type="text" 
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                placeholder="Vikram Singh"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-xs font-bold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm"
              />
           </div>
           <div className="space-y-2 opacity-50">
              <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest ml-4">Email Address (Locked)</label>
              <input 
                type="email" 
                readOnly
                value={formData.email}
                className="w-full bg-zinc-100 border border-zinc-100 rounded-2xl px-6 py-4 text-xs font-bold text-zinc-500 cursor-not-allowed"
              />
           </div>
           <div className="md:col-span-2 flex justify-end mt-4">
              <button type="submit" className="flex items-center gap-3 bg-zinc-950 text-white font-black py-4 px-8 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-purple-600 transition-all active:scale-95 shadow-lg">
                 Save Changes <Save size={14} />
              </button>
           </div>
        </form>
      </div>

      {/* Security Info Card */}
      <div className="bg-white border border-zinc-100 rounded-[32px] p-8 shadow-sm">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center">
              <ShieldCheck size={20} />
           </div>
           <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-950 leading-none mb-1">Security & Privacy</h4>
              <p className="text-[10px] text-zinc-400 font-medium tracking-tight">Manage your vault protection</p>
           </div>
        </div>

        <form onSubmit={handleUpdatePassword} className="space-y-6">
           <div className="relative group">
              <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest ml-4 mb-2 block">Current Password</label>
              <div className="relative">
                 <input 
                   type={showPassword ? "text" : "password"} 
                   placeholder="••••••••"
                   className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-xs font-bold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm"
                 />
                 <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-300 hover:text-zinc-600 transition-colors">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                 </button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                 <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest ml-4">New Password</label>
                 <input 
                   type="password" 
                   placeholder="Minimum 8 chars"
                   className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-xs font-bold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm"
                 />
              </div>
              <div className="space-y-2">
                 <label className="text-[9px] font-black text-zinc-400 uppercase tracking-widest ml-4">Confirm Vault Entry</label>
                 <input 
                   type="password" 
                   className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-xs font-bold text-zinc-950 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white transition-all shadow-sm"
                 />
              </div>
           </div>
           
           <div className="flex justify-end mt-4">
              <button type="submit" className="flex items-center gap-3 bg-zinc-950 text-white font-black py-4 px-8 rounded-2xl uppercase tracking-widest text-[10px] hover:bg-purple-600 transition-all active:scale-95 shadow-lg">
                 Update Security <Lock size={14} />
              </button>
           </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AccountSettings;
