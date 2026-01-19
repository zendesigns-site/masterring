
import React from 'react';
import { Crown, Sparkles, ShieldCheck, Heart, Wifi, Cpu, Lock, Star, ChevronRight, Share2, Eye, Globe, Zap } from 'lucide-react';

export const Luxury: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-consumerGold selection:text-black font-sans">
      
      {/* 1. Hero Section: "The Sovereign Masterpiece" */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=2070" 
            alt="Luxury Shimmer Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/80 via-transparent to-[#020202]"></div>
        </div>

        <div className="relative z-10 animate-fade-in space-y-8">
          <div className="inline-flex items-center space-x-2 px-6 py-2 border border-consumerGold/30 bg-consumerGold/5 rounded-full mb-4 backdrop-blur-sm">
            <Crown size={14} className="text-consumerGold" />
            <span className="text-[10px] font-mono tracking-[0.5em] text-consumerGold uppercase">Limited Release</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none">
            ORBYX™ | <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-consumerGold via-white to-consumerGold animate-shimmer bg-[length:200%_auto]">
              LUXURY
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 font-light tracking-wide italic font-body">
            "The Silent Authority. Where precious alloys meet supreme intelligence."
          </p>

          <div className="pt-8">
            <button className="px-16 py-6 bg-white text-black font-bold uppercase tracking-[0.3em] text-xs hover:bg-consumerGold transition-all duration-700 shadow-[0_0_60px_rgba(255,215,0,0.2)]">
              Acquire Orbyx™
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-[1px] h-20 bg-gradient-to-b from-consumerGold to-transparent"></div>
        </div>
      </section>

      {/* 2. RE-DESIGNED: "The 180° Radiance" - Center-Stage Layout */}
      <section className="py-40 px-4 relative">
        <div className="max-w-7xl mx-auto text-center mb-24">
           <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The 180° Radiance</h2>
           <p className="text-gray-500 max-w-2xl mx-auto font-body">A masterpiece of asymmetric symmetry. Orbyx™ fuses active intelligence with eternal high-jewelry.</p>
        </div>

        <div className="max-w-6xl mx-auto relative flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-0">
          
          {/* Callout Left - Technical Duality */}
          <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-20 space-y-20 w-full lg:w-72 text-center lg:text-right">
             <div className="group cursor-default">
                <div className="text-consumerGold font-mono text-[10px] tracking-[0.4em] mb-2 uppercase">Active Vision</div>
                <h3 className="text-xl font-bold mb-2">Curved AMOLED</h3>
                <p className="text-sm text-gray-500 font-body leading-relaxed">0.25mm ultra-thin display seamlessly bonded to the titanium for discrete status updates.</p>
             </div>
             <div className="group cursor-default">
                <div className="text-consumerGold font-mono text-[10px] tracking-[0.4em] mb-2 uppercase">Digital Core</div>
                <h3 className="text-xl font-bold mb-2">TinyML Neural Engine</h3>
                <p className="text-sm text-gray-500 font-body leading-relaxed">On-device inference for absolute privacy. Biometric analysis remains local to your finger.</p>
             </div>
          </div>

          {/* Center Visual - The Orbyx™ Ring */}
          <div className="relative group w-80 h-80 md:w-[450px] md:h-[450px]">
             <div className="absolute inset-0 rounded-full border-[1px] border-consumerGold/10 animate-spin-slow"></div>
             <div className="absolute inset-8 rounded-full border-[1px] border-consumerGold/30 animate-spin-reverse-slow"></div>
             
             {/* Main Ring Body */}
             <div className="absolute inset-16 rounded-full bg-black border-[18px] border-[#111] shadow-[0_0_100px_rgba(255,215,0,0.1)] overflow-hidden">
                {/* Tech Side (Animated Cyan Glow) */}
                <div className="absolute inset-0 bg-gradient-to-br from-tech/20 via-transparent to-transparent opacity-60"></div>
                {/* Luxury Side (Orbyx™ Jewel side) */}
                <div className="absolute inset-0 bg-gradient-to-l from-consumerGold/40 via-consumerGold/10 to-transparent clip-path-right shadow-[inset_0_0_40px_rgba(255,215,0,0.2)]">
                   <div className="absolute top-1/4 right-1/4">
                      <Sparkles className="text-consumerGold animate-pulse" size={32} />
                   </div>
                </div>
                {/* Active Interface Overlay */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2">
                   <div className="w-1.5 h-1.5 rounded-full bg-tech animate-ping"></div>
                </div>
             </div>
          </div>

          {/* Callout Right - Material Essence */}
          <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 z-20 space-y-20 w-full lg:w-72 text-center lg:text-left">
             <div className="group cursor-default">
                <div className="text-consumerGold font-mono text-[10px] tracking-[0.4em] mb-2 uppercase">Precious Essence</div>
                <h3 className="text-xl font-bold mb-2">950 Platinum & Diamonds</h3>
                <p className="text-sm text-gray-500 font-body leading-relaxed">Hand-finished 950 Platinum housing featuring high-grade micro-pave diamond setting.</p>
             </div>
             <div className="group cursor-default">
                <div className="text-consumerGold font-mono text-[10px] tracking-[0.4em] mb-2 uppercase">Armor</div>
                <h3 className="text-xl font-bold mb-2">Grade 5 Titanium</h3>
                <p className="text-sm text-gray-500 font-body leading-relaxed">Aerospace-grade chassis reinforced for eternal durability beyond the boundaries of time.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. "Silent Connection": Private Emotional Bonds */}
      <section className="py-32 relative bg-[#050505] overflow-hidden border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <Share2 className="text-consumerGold mx-auto mb-8 animate-pulse" size={48} />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">The Silent Connection</h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto mb-16 leading-relaxed">
            In an era of noise, the truest intimacy is silence. Orbyx™ translates your biometrics into emotional signals shared only with your chosen Inner Circle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Invisible Comms", desc: "Exchange haptic 'pulses' with loved ones without ever glancing at your phone.", icon: Eye },
              { title: "Absolute Privacy", desc: "Every emotional signal is shielded by hardware-level AES-256 encryption.", icon: Lock },
              { title: "Sync Empathy", desc: "Real-time emotional maps shared exclusively within your Trusted Circle.", icon: Heart }
            ].map((feature, i) => (
              <div key={i} className="p-10 border border-white/5 bg-[#0a0a0a] hover:border-consumerGold/30 transition-all duration-700">
                <feature.icon className="text-consumerGold mb-6 mx-auto" size={32} />
                <h3 className="text-lg font-bold mb-4">{feature.title}</h3>
                <p className="text-sm text-gray-500 font-body leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RE-DESIGNED: "Phone-Free Sovereignty" - Immersive Wide Card */}
      <section className="py-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#111] to-black border border-consumerGold/20 rounded-2xl overflow-hidden p-12 md:p-24 shadow-2xl">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-consumerGold/10 rounded-full flex items-center justify-center border border-consumerGold/30 shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                    <Wifi className="text-consumerGold" size={20} />
                  </div>
                  <span className="text-xs font-mono text-consumerGold uppercase tracking-[0.3em]">Digital Sovereignty</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Phone-Free <br/><span className="text-gray-400 font-light italic text-4xl md:text-5xl">Independence</span></h2>
                
                <p className="text-xl text-gray-400 font-body leading-relaxed mb-12">
                  True luxury is the ability to disconnect from the screen. With integrated global eSIM, Orbyx™ operates as a fully independent entity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-white font-bold flex items-center">
                      <Globe size={18} className="text-consumerGold mr-2" /> 
                      Global Roaming
                    </h4>
                    <p className="text-sm text-gray-500">Continuous connectivity in over 190 countries without manual configuration.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white font-bold flex items-center">
                      <Zap size={18} className="text-consumerGold mr-2" /> 
                      Priority Channel
                    </h4>
                    <p className="text-sm text-gray-500">Dedicated high-priority data stream for critical notifications and security alerts.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm aspect-square bg-[#0a0a0a] rounded-xl border border-white/5 flex flex-col items-center justify-center relative shadow-inner group">
                   <div className="absolute inset-0 bg-consumerGold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                   <div className="text-[10px] font-mono text-gray-500 mb-4 tracking-[0.5em] uppercase">Network Status</div>
                   <div className="text-4xl font-bold text-white mb-2 tracking-[0.2em]">CONNECTED</div>
                   <div className="flex space-x-2 mt-4">
                      {[1,2,3,4,5].map(i => <div key={i} className={`w-1 h-6 bg-consumerGold/${i*20} rounded-full`}></div>)}
                   </div>
                   <div className="mt-8 text-[8px] font-mono text-gray-600 uppercase tracking-widest">ORBYX™ SOVEREIGN STACK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Privacy: The Ultimate Luxury */}
      <section className="py-32 bg-[#020202]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="text-consumerGold mx-auto mb-8" size={64} />
          <h2 className="text-4xl font-bold mb-6 italic">Privacy is the Ultimate Luxury</h2>
          <p className="text-xl text-gray-400 font-body leading-relaxed mb-12">
            In a world that commodifies data, absolute privacy is the supreme privilege. The Orbyx™ architecture ensures your biological signature never leaves your finger.
          </p>
          
          <div className="inline-grid grid-cols-1 md:grid-cols-2 gap-12 text-left bg-white/5 p-12 rounded-sm backdrop-blur-md border border-white/10">
             <div>
                <h4 className="text-white font-bold mb-2 flex items-center"><Cpu className="text-consumerGold mr-2" size={18}/> Zero Cloud Dependency</h4>
                <p className="text-sm text-gray-500">Biometric analysis happens locally on the Orbyx™ neural core. Your stress and focus data never touch an external server.</p>
             </div>
             <div>
                <h4 className="text-white font-bold mb-2 flex items-center"><Star className="text-consumerGold mr-2" size={18}/> Data Sovereignty</h4>
                <p className="text-sm text-gray-500">Raw signals are processed and purged instantly after inference. You remain the sole owner of your biological identity.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Elite Wellness Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-[#020202] to-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4 tracking-tight">Elite Wellness Architecture</h2>
              <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.5em]">Optimize. Master. Rest.</p>
            </div>
            <div className="mt-8 md:mt-0">
               <span className="text-6xl font-bold text-white/5 tracking-tighter">ORBYX™ EST. 2024</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div className="p-12 border border-white/5 bg-[#080808] hover:border-consumerGold/20 transition-all duration-700 shadow-xl group">
                <h3 className="text-2xl font-bold mb-6 text-consumerGold uppercase tracking-widest">Performance Insights</h3>
                <p className="text-gray-400 font-body leading-relaxed mb-8">
                   Advanced translation of physiological signals. Understand how your body responds to the weight of high-stakes decision making.
                </p>
                <div className="space-y-6">
                   <div className="flex justify-between items-center py-3 border-b border-white/5 group-hover:border-consumerGold/10 transition-colors">
                      <span className="text-sm text-gray-500 uppercase tracking-widest">Recovery Index</span>
                      <span className="text-sm font-mono text-white">LEVEL_PEAK</span>
                   </div>
                   <div className="flex justify-between items-center py-3 border-b border-white/5 group-hover:border-consumerGold/10 transition-colors">
                      <span className="text-sm text-gray-500 uppercase tracking-widest">Readiness Score</span>
                      <span className="text-sm font-mono text-white">OPTIMIZED</span>
                   </div>
                </div>
             </div>

             <div className="p-12 border border-white/5 bg-[#080808] hover:border-consumerGold/20 transition-all duration-700 shadow-xl group">
                <h3 className="text-2xl font-bold mb-6 text-consumerGold uppercase tracking-widest">The Trusted Circle</h3>
                <p className="text-gray-400 font-body leading-relaxed mb-8">
                   Share your wellbeing status exclusively with those you select. Create an invisible safety net that communicates without spoken words.
                </p>
                <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-14 h-14 rounded-full border-2 border-[#020202] bg-gradient-to-br from-consumerGold/20 to-black flex items-center justify-center hover:z-30 transition-transform hover:-translate-y-2 cursor-pointer shadow-lg">
                        <Star size={14} className="text-consumerGold/40" />
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-60 text-center px-4 relative overflow-hidden">
         <div className="absolute inset-0 bg-consumerGold/5 animate-pulse opacity-20"></div>
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-6xl md:text-8xl font-bold mb-12 tracking-tighter">THE ULTIMATE COMMITMENT</h2>
            <p className="text-xl text-gray-500 mb-16 font-body italic tracking-wide max-w-2xl mx-auto">
               A masterpiece of engineering. A status of distinction. Reserved for those who accept no compromises.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
               <button className="px-16 py-7 bg-white text-black font-bold uppercase tracking-[0.4em] text-xs hover:bg-consumerGold transition-all duration-700 shadow-2xl">
                  Acquire Orbyx™ Masterpiece
               </button>
               <button className="px-16 py-7 border border-white/20 text-white font-bold uppercase tracking-[0.4em] text-xs hover:bg-white/5 transition-all">
                  Concierge Inquiry
               </button>
            </div>
         </div>
      </section>

      <style>{`
        .clip-path-right {
          clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 5s infinite linear;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s infinite linear;
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 45s infinite linear;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
