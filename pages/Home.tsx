import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Wifi, Zap, Lock, ShieldCheck, Heart, Radio, Cpu, Layers } from 'lucide-react';
import { PILLARS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      
      {/* 1. VISIONE CENTRALE (Hero Section) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden border-b border-white/5">
        {/* Background */}
        <div className="absolute inset-0 z-0">
           <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Ring Silhouette" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl px-4 mt-16">
          <div className="mb-6 inline-block">
             <span className="py-1 px-3 rounded border border-white/20 bg-white/5 text-xs font-mono tracking-[0.2em] text-gray-400">
               THE NEXT EVOLUTION
             </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-tight">
            ONE RING. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-consumer via-white to-tactical">
              TWO WORLDS.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-3xl mx-auto font-body">
            Precision in Life & Performance. <br/>
            The first wearable with a physical split between Lifestyle and Tactical operations.
          </p>
          
          {/* Immediate Conversion Points */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              to="/consumer" 
              className="group relative px-8 py-4 bg-transparent border border-consumer text-consumer font-bold uppercase tracking-widest hover:bg-consumer hover:text-black transition-all duration-300 w-full md:w-64 flex justify-center items-center rounded-sm"
            >
              Discover Consumer
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/tactical" 
              className="group relative px-8 py-4 bg-transparent border border-tactical text-tactical font-bold uppercase tracking-widest hover:bg-tactical hover:text-white transition-all duration-300 w-full md:w-64 flex justify-center items-center rounded-sm"
            >
              Deploy Tactical
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. I TRE PILASTRI (The Three Pillars) */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MASTER ARRANGEMENT</h2>
            <div className="h-1 w-20 bg-white/20 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.id} className="p-8 border border-white/10 bg-[#080808] rounded-lg hover:border-tech/50 transition-colors duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <pillar.icon size={100} />
                </div>
                <pillar.icon className="w-12 h-12 text-tech mb-6 relative z-10" />
                <h3 className="text-xl font-bold mb-3 relative z-10">{pillar.title}</h3>
                <p className="text-gray-400 font-body relative z-10">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 & 4. INTELLIGENZA ARTIFICIALE OFFLINE & CONNETTIVITÀ */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* 3. Offline AI */}
          <div className="flex flex-col justify-center">
             <div className="flex items-center mb-4 text-tech">
                <Cpu className="mr-3" />
                <span className="font-mono text-sm tracking-widest uppercase">Pillar 03</span>
             </div>
             <h3 className="text-3xl font-bold mb-4">Offline Artificial Intelligence</h3>
             <p className="text-gray-400 font-body leading-relaxed mb-6">
               Powered by specialized <strong className="text-white">TinyML architecture</strong>. 
               The ring processes complex biometric algorithms directly on the processor. 
               Zero latency. Zero data leakage. Intelligent decisions made instantly on your finger.
             </p>
             <Link to="/technology" className="text-sm font-bold text-white underline underline-offset-4 decoration-tech hover:text-tech transition-colors">
               Explore Architecture &rarr;
             </Link>
          </div>

          {/* 4. Connectivity */}
          <div className="flex flex-col justify-center">
             <div className="flex items-center mb-4 text-tech">
                <Wifi className="mr-3" />
                <span className="font-mono text-sm tracking-widest uppercase">Pillar 02</span>
             </div>
             <h3 className="text-3xl font-bold mb-4">Global eSIM Connectivity</h3>
             <p className="text-gray-400 font-body leading-relaxed mb-6">
               Independent 24/7 connection. The embedded eSIM allows the ring to stay connected 
               to global networks without a smartphone. Whether you are in an urban center or 
               remote deployment, you remain online.
             </p>
          </div>

        </div>
      </section>

      {/* 5. LO "SPLIT" DELLE EDIZIONI (The Tollbooth) */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
           <h2 className="text-4xl font-bold">CHOOSE YOUR WORLD</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Consumer Lane */}
          <Link to="/consumer" className="relative group overflow-hidden border-r border-white/10">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60" 
                 style={{backgroundImage: "url('https://picsum.photos/900/1200?random=1')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-12 flex flex-col items-start">
               <span className="bg-consumer/20 text-consumer border border-consumer px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4">
                 Lifestyle
               </span>
               <h3 className="text-5xl font-bold text-white mb-2">CONSUMER</h3>
               <div className="h-1 w-24 bg-consumer mb-6"></div>
               <p className="text-gray-300 font-body mb-8 max-w-md text-left">
                 Wellness. Recovery. Connection.<br/>
                 The daily companion for optimized living.
               </p>
               <span className="text-white border-b border-consumer pb-1 group-hover:text-consumer transition-colors">
                 Enter Lane &rarr;
               </span>
            </div>
          </Link>

          {/* Tactical Lane */}
          <Link to="/tactical" className="relative group overflow-hidden">
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60 grayscale" 
                 style={{backgroundImage: "url('https://picsum.photos/900/1200?random=2')"}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-12 flex flex-col items-start">
               <span className="bg-tactical/20 text-tactical border border-tactical px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4">
                 Operations
               </span>
               <h3 className="text-5xl font-bold text-white mb-2">TACTICAL</h3>
               <div className="h-1 w-24 bg-tactical mb-6"></div>
               <p className="text-gray-300 font-body mb-8 max-w-md text-left">
                 Mission Critical. Mesh Network. Threat Sensing.<br/>
                 Built for the extreme.
               </p>
               <span className="text-white border-b border-tactical pb-1 group-hover:text-tactical transition-colors">
                 Enter Lane &rarr;
               </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 6 & 7. HIGHLIGHTS (Consumer & Tactical Features) */}
      <section className="bg-[#0a0a0a] py-24 border-b border-white/5">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* 6. Consumer Highlight */}
            <div className="p-8 border border-consumer/20 rounded-xl bg-gradient-to-br from-consumer/5 to-transparent hover:border-consumer/50 transition-all">
               <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">DUBO™ <br/><span className="text-consumer text-lg">Dynamic Wellness Optimization</span></h3>
                  <Heart className="text-consumer" size={32} />
               </div>
               <p className="text-gray-400 font-body mb-6">
                 Advanced Bio-Sensing Array monitors lifestyle metrics to provide real-time wellness adjustments.
                 Tailored specifically for the Consumer Edition user.
               </p>
               <ul className="space-y-2 text-sm text-gray-300 font-mono">
                  <li>+ Recovery Score Analysis</li>
                  <li>+ Stress Readiness Monitor</li>
                  <li>+ Sleep Architecture Tracking</li>
               </ul>
            </div>

            {/* 7. Tactical Highlight */}
            <div className="p-8 border border-tactical/20 rounded-xl bg-gradient-to-br from-tactical/5 to-transparent hover:border-tactical/50 transition-all">
               <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">CBRN & Mesh <br/><span className="text-tactical text-lg">Threat Awareness System</span></h3>
                  <Radio className="text-tactical" size={32} />
               </div>
               <p className="text-gray-400 font-body mb-6">
                 Military-grade sensors detect Chemical, Biological, Radiological, and Nuclear threats. 
                 Squad Mesh provides offline communication range &gt; 1000m.
               </p>
               <ul className="space-y-2 text-sm text-gray-300 font-mono">
                  <li>+ MIL-STD-810H Certified</li>
                  <li>+ Sub-GHz Radio (Offline)</li>
                  <li>+ Hazard Alert Vibration</li>
               </ul>
            </div>

         </div>
      </section>

      {/* 8. CONNESSIONE EMOTIVA (Ring <-> Ring) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#111]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
           <div className="inline-block p-3 rounded-full bg-white/5 border border-white/10 mb-6">
              <Heart className="text-tech animate-pulse" />
           </div>
           <h2 className="text-4xl md:text-5xl font-bold mb-6">Emotional Connection</h2>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-body">
             An exclusive feature. The ring analyzes <span className="text-white">micro-patterns</span> (temperature, heart rate, stress) 
             to deduce your emotional state (Calm, Focused, Stressed).
           </p>

           <div className="bg-[#050505] border border-white/10 rounded-2xl p-12 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="text-center">
                    <div className="w-20 h-20 rounded-full border-4 border-consumer mx-auto mb-4 flex items-center justify-center bg-white/5">
                       <span className="font-bold text-consumer">YOU</span>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">STATUS: CALM</div>
                 </div>

                 <div className="flex-1 flex flex-col items-center">
                    <div className="w-full h-1 bg-gray-800 relative">
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 text-xs font-mono text-tech border border-tech/30 rounded py-1">
                          1-3 BYTE ENCRYPTED PACKET
                       </div>
                    </div>
                    <div className="mt-4 flex items-center text-xs text-gray-500 font-mono">
                       <Wifi className="w-3 h-3 mr-2" />
                       OFFLINE TRANSFER (NO INTERNET)
                    </div>
                 </div>

                 <div className="text-center">
                    <div className="w-20 h-20 rounded-full border-4 border-consumer mx-auto mb-4 flex items-center justify-center bg-white/5">
                       <span className="font-bold text-consumer">THEM</span>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">STATUS: SYNCED</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 9 & 10. SUPERIORITÀ INGEGNERISTICA & PRIVACY */}
      <section className="py-24 bg-blueprint bg-fixed border-t border-white/10">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               
               {/* 9. Engineering */}
               <div className="bg-black/80 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                     <Layers className="mr-3 text-tech" />
                     Engineering Superiority
                  </h3>
                  <div className="space-y-4">
                     <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-gray-400">Material</span>
                        <span className="text-white font-mono">Aerospace Titanium</span>
                     </div>
                     <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-gray-400">Display Profile</span>
                        <span className="text-white font-mono">&lt; 0.25 mm OLED</span>
                     </div>
                     <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-gray-400">Battery Architecture</span>
                        <span className="text-white font-mono">Flat-Stack Array</span>
                     </div>
                  </div>
               </div>

               {/* 10. Privacy */}
               <div className="bg-black/80 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                     <Lock className="mr-3 text-tech" />
                     Privacy & Data Silo
                  </h3>
                  <p className="text-gray-300 font-body mb-6">
                     We guarantee your data sovereignty. Utilizing local <strong>TinyML</strong> inference, 
                     all sensitive processing happens on-device.
                  </p>
                  <div className="p-4 bg-green-900/20 border border-green-500/30 rounded text-center">
                     <span className="text-green-400 font-bold uppercase text-sm tracking-widest flex items-center justify-center">
                        <ShieldCheck className="mr-2" size={16}/>
                        NO PERSONAL DATA LEAVES THE DEVICE
                     </span>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 11. CALL TO ACTION (Final CTA) */}
      <section className="py-24 bg-primary text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">READY TO COMMIT?</h2>
            <p className="text-xl text-gray-400 mb-12">
               Choose your path. Precision for Life, or Performance for the Mission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
               <Link to="/consumer" className="px-10 py-5 bg-white text-black font-bold text-lg rounded hover:bg-consumer hover:text-white transition-colors shadow-lg shadow-white/10">
                  Shop Consumer Edition
               </Link>
               <Link to="/tactical" className="px-10 py-5 bg-[#2a2a2a] text-white border border-gray-600 font-bold text-lg rounded hover:bg-tactical hover:border-tactical transition-colors shadow-lg">
                  Shop Tactical Edition
               </Link>
            </div>
         </div>
      </section>

      {/* 12. Footer is handled by the global Footer component */}
    </div>
  );
};
