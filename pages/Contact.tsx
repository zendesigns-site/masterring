
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Shield, Globe, Cpu, Clock, CheckCircle2, Zap, Target, Box, Download, ArrowRight, ShieldAlert, Sparkles, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TerminalLog = () => {
  const [logs, setLogs] = useState<string[]>(['Initializing Uplink...', 'Decrypting Node 12-B...', 'Securing Channel (AES-256)...']);
  
  useEffect(() => {
    const messages = [
      'Scanning Biometric Signatures...',
      'Latency: 14ms (Zurich Node)',
      'TinyML Engine: Operational',
      'Quantum Encryption: Verified',
      'Awaiting User Intent...',
      'Satellite Sync: Active'
    ];
    
    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-3), messages[Math.floor(Math.random() * messages.length)]]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50 hidden xl:block">
      <div className="bg-black/80 border border-white/10 p-4 rounded-lg backdrop-blur-xl w-64 shadow-2xl">
        <div className="flex items-center space-x-2 mb-3 border-b border-white/10 pb-2">
          <Terminal size={14} className="text-tech" />
          <span className="text-[9px] font-mono uppercase tracking-widest text-gray-500">System Log</span>
        </div>
        <div className="space-y-1">
          {logs.map((log, i) => (
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              key={`${log}-${i}`} 
              className="text-[9px] font-mono text-white/50"
            >
              <span className="text-tech mr-1">$</span> {log}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

const CSSRing = ({ color }: { color: string }) => (
  <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center scale-75 md:scale-100">
    <motion.div 
      animate={{ rotateZ: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className={`absolute inset-0 border-[3px] border-dashed rounded-full border-${color}/20`}
    />
    <motion.div 
      animate={{ rotateZ: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className={`absolute inset-4 border border-solid rounded-full border-${color}/10`}
    />
    <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-${color} shadow-[0_0_50px_rgba(0,255,255,0.3)] flex items-center justify-center relative overflow-hidden group`}>
       <div className={`absolute inset-0 bg-gradient-to-tr from-${color}/20 via-transparent to-white/5`}></div>
       <MessageSquare size={40} className={`text-${color} group-hover:scale-110 transition-transform`} />
       <motion.div 
         animate={{ opacity: [0.1, 0.4, 0.1] }}
         transition={{ duration: 2, repeat: Infinity }}
         className={`absolute inset-0 bg-${color}`}
       />
    </div>
  </div>
);

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [selectedWorld, setSelectedWorld] = useState<'consumer' | 'tactical'>('consumer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 2000);
  };

  const theme = selectedWorld === 'consumer' ? {
    color: 'tech', // tech maps to cyan #00FFFF
    label: 'Life Optimization'
  } : {
    color: 'tactical', // tactical maps to red #FF3333
    label: 'Operational Resilience'
  };

  return (
    <div className="pt-24 min-h-screen bg-primary text-action overflow-hidden relative selection:bg-tech selection:text-black">
      <TerminalLog />
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-blueprint bg-fixed opacity-5 pointer-events-none"></div>
      <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-${theme.color}/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 mix-blend-screen transition-colors duration-1000`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-32">
        
        {/* Stunning Header Section */}
        <div className="mb-24 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={`font-mono text-xs uppercase tracking-[0.6em] mb-6 block text-${theme.color} font-bold transition-colors`}>
              Direct Communication Channel
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-tight">
              Get in <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r from-${theme.color} via-white to-gray-500`}>Touch</span>
            </h1>
            <p className="text-gray-400 font-body text-xl max-w-xl leading-relaxed">
              Have questions about our hardware or software architecture? Connect with our specialist team for technical support, press inquiries, or partnership opportunities.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <CSSRing color={theme.color} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Persuasive Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* World Switcher (Persuasion Trigger) */}
            <div className="p-1.5 bg-white/5 rounded-[2.5rem] border border-white/10 flex hover:border-white/20 transition-colors">
              <button 
                onClick={() => setSelectedWorld('consumer')}
                className={`flex-1 flex flex-col items-center justify-center py-5 space-y-2 rounded-[2rem] text-[9px] font-black uppercase tracking-widest transition-all ${selectedWorld === 'consumer' ? 'bg-consumer text-black shadow-2xl shadow-consumer/40' : 'text-gray-500 hover:text-white'}`}
              >
                <Sparkles size={20} />
                <span>Life Opt</span>
              </button>
              <button 
                onClick={() => setSelectedWorld('tactical')}
                className={`flex-1 flex flex-col items-center justify-center py-5 space-y-2 rounded-[2rem] text-[9px] font-black uppercase tracking-widest transition-all ${selectedWorld === 'tactical' ? 'bg-tactical text-white shadow-2xl shadow-tactical/40' : 'text-gray-500 hover:text-white'}`}
              >
                <Target size={20} />
                <span>Op Ready</span>
              </button>
            </div>

            <motion.div 
              layout
              className="bg-[#0c0c0c] border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl relative overflow-hidden group shadow-2xl"
            >
              <div className={`absolute -right-4 -top-4 opacity-5 text-${theme.color} group-hover:scale-110 transition-transform duration-700`}>
                {selectedWorld === 'consumer' ? <Zap size={180} /> : <ShieldAlert size={180} />}
              </div>
              
              <h2 className={`text-2xl font-black uppercase tracking-tighter mb-10 flex items-center text-${theme.color} transition-colors`}>
                Exclusive Benefits
              </h2>
              
              <ul className="space-y-8">
                {[
                  { icon: Box, text: "Priority Reservation", label: "Skip the 12-month waitlist" },
                  { icon: Download, text: "Developer SDK Access", label: "For tech-first integrators" },
                  { icon: Cpu, text: "Founding Member NFT", label: "Proof of biological sovereignty" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-5 group/item">
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/5 group-hover/item:border-tech/30 transition-colors">
                      <item.icon size={20} className={`text-${theme.color} transition-colors`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider">{item.text}</h4>
                      <p className="text-[10px] text-gray-500 font-mono uppercase mt-1.5 tracking-widest">{item.label}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-14 pt-10 border-t border-white/5">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Global Users Active</span>
                   <span className="text-tech font-mono text-xs">8,412.02</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                     animate={{ x: [-100, 100] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                     className="w-1/2 h-full bg-tech/50 blur-sm"
                   />
                </div>
              </div>
            </motion.div>
          </div>

          {/* High-Conversion Form */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#080808] border border-white/5 rounded-[3rem] p-8 md:p-16 shadow-[0_50px_150px_rgba(0,0,0,0.9)] relative"
            >
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="py-24 text-center"
                  >
                    <div className="w-24 h-24 bg-tech/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-tech/30 shadow-[0_0_40px_rgba(0,255,255,0.2)]">
                      <CheckCircle2 size={48} className="text-tech" />
                    </div>
                    <h2 className="text-5xl font-black uppercase mb-6 tracking-tighter italic">Message Received</h2>
                    <p className="text-gray-500 mb-12 max-w-sm mx-auto text-lg">
                      Thank you for reaching out. A specialist from our team will contact you at your provided email address shortly.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="group px-14 py-5 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-[0.4em] hover:bg-tech hover:scale-105 active:scale-95 transition-all flex items-center mx-auto space-x-4"
                    >
                      <span>New Message</span>
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-12"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] ml-2">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-tech/50 focus:bg-tech/[0.05] transition-all text-sm font-bold placeholder:text-gray-800"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] ml-2">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="email@example.com"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-tech/50 focus:bg-tech/[0.05] transition-all text-sm font-bold placeholder:text-gray-800"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] ml-2">Inquiry Type</label>
                      <select 
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-tech/50 transition-all text-sm font-bold appearance-none cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled className="bg-primary">Select accurate category</option>
                        <option value="consumer" className="bg-primary">Support - Consumer Edition</option>
                        <option value="tactical" className="bg-primary">Support - Tactical Edition</option>
                        <option value="luxury" className="bg-primary">Sales - Luxury Pieces</option>
                        <option value="partnership" className="bg-primary">Partnerships & Investors</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] ml-2">Message Details</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="How can we assist you today?"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 focus:outline-none focus:border-tech/50 transition-all text-sm font-bold placeholder:text-gray-800 resize-none"
                      ></textarea>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-8 border-t border-white/5">
                      <div className="flex items-center space-x-4">
                         <div className="bg-tech/10 p-3 rounded-xl border border-tech/20">
                            <Shield size={20} className="text-tech" />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-500">Secure Protocol</span>
                            <span className="text-[10px] font-mono text-white tracking-widest">AES-256 ENCRYPTED</span>
                         </div>
                      </div>
                      
                      <button 
                        type="submit" 
                        disabled={formStatus === 'sending'}
                        className={`group w-full md:w-auto px-20 py-7 rounded-full flex items-center justify-center space-x-4 font-black uppercase tracking-[0.5em] text-[10px] transition-all relative overflow-hidden ${
                          formStatus === 'sending' 
                          ? 'bg-white/10 text-white cursor-wait' 
                          : 'bg-tech text-black hover:scale-105 active:scale-95 shadow-[0_30px_70px_rgba(0,255,255,0.3)]'
                        }`}
                      >
                         <Send size={16} />
                         <span>{formStatus === 'sending' ? 'Sending...' : 'Send Message'}</span>
                         <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Footer Assets */}
        <div className="mt-32 border-t border-white/5 pt-24 grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: Globe, h: "Global Nodes", p: "Active uplink across 12 zones." },
              { icon: Clock, h: "Latency: <15ms", p: "Real-time query processing." },
              { icon: Shield, h: "Zero-Trust", p: "Your biology is your own." },
              { icon: Cpu, h: "TinyML Edge", p: "Local inference. Local privacy." }
            ].map((item, i) => (
              <div key={i} className="group">
                 <item.icon size={24} className="text-gray-600 mb-6 group-hover:text-tech transition-colors" />
                 <h5 className="font-black uppercase tracking-widest text-xs mb-3">{item.h}</h5>
                 <p className="text-gray-500 text-[10px] font-mono leading-relaxed">{item.p}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};


