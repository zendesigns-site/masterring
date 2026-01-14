import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Share2, ShieldCheck, Wifi, Activity, Droplets, Zap, Globe, Lock, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const recoveryData = [
  { name: '06:00', stress: 15, recovery: 95 },
  { name: '09:00', stress: 45, recovery: 88 },
  { name: '12:00', stress: 60, recovery: 72 },
  { name: '15:00', stress: 55, recovery: 68 },
  { name: '18:00', stress: 30, recovery: 75 },
  { name: '21:00', stress: 20, recovery: 85 },
  { name: '00:00', stress: 10, recovery: 92 },
];

export const Consumer: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-primary text-gray-200">
      
      {/* MODULE 1: TITOLO E VISIONE (Focus sul Lifestyle) */}
      <section className="relative min-h-[90vh] flex items-center px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-consumer/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary to-transparent"></div>
          {/* Abstract light leak */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-consumerGold/20 rounded-full blur-[128px] opacity-40"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-consumer/30 bg-consumer/5 text-consumer text-xs font-bold uppercase tracking-widest mb-6">
              <Heart size={14} className="mr-2" />
              Lifestyle & Wellness
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              ONE RING.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-consumer to-consumerGold">
                TWO WORLDS.
              </span>
            </h1>
            <h2 className="text-2xl text-white font-light mb-8">
              Precision in Life & Performance.
            </h2>
            <p className="text-lg text-gray-400 font-body max-w-lg mb-10 leading-relaxed">
              The ultimate daily companion. Seamlessly integrating advanced bio-sensing with your lifestyle to optimize wellness, recovery, and connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-consumer text-black font-bold rounded hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,200,150,0.3)]">
                Pre-Order Now
              </button>
              <button className="px-8 py-4 bg-transparent border border-gray-600 text-white font-bold rounded hover:border-consumer hover:text-consumer transition-colors">
                Watch the Film
              </button>
            </div>
          </div>
          
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Ring Visualization */}
            <div className="relative w-80 h-80 rounded-full border-[16px] border-[#222] shadow-2xl flex items-center justify-center bg-black">
              {/* Screen Simulation */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                 <div className="w-full h-full bg-gradient-to-tr from-black via-[#111] to-[#222]"></div>
                 {/* Gloss */}
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 blur-xl"></div>
              </div>
              <div className="relative z-10 text-center">
                 <div className="text-consumer font-mono text-4xl font-bold">94</div>
                 <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">Recovery</div>
              </div>
              {/* Pulse Ring */}
              <div className="absolute inset-[-20px] rounded-full border border-consumer/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULE 2: IL CENTRO DEL BENESSERE (DUBO™) */}
      <section className="py-24 bg-white/5 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-16 max-w-3xl mx-auto">
             <span className="text-consumerGold font-bold tracking-widest text-sm uppercase mb-2 block">The Optimization Engine</span>
             <h2 className="text-4xl font-bold mb-6">DUBO™ <span className="text-gray-500 font-light">Dynamic Wellness Optimization</span></h2>
             <p className="text-gray-400 font-body text-lg">
               It's not just data. It's a plan. DUBO™ interprets your biometrics to provide personalized recovery strategies and stress management advice, adapting in real-time to your lifestyle.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Adaptive Planning", desc: "Daily goals that shift based on your Recovery Score." },
                { title: "Stress Management", desc: "Real-time breathing exercises when high micro-pattern variance is detected." },
                { title: "Sleep Architecture", desc: "Deep analysis of REM and Deep sleep cycles for better rest." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-black border border-white/10 rounded-lg hover:border-consumer/50 transition-all group">
                   <div className="w-12 h-12 rounded-full bg-consumer/10 flex items-center justify-center mb-6 group-hover:bg-consumer/20">
                      <Zap className="text-consumer" size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                   <p className="text-gray-400 font-body text-sm">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* MODULE 3: IL CUORE DELLA MISURAZIONE (Advanced Bio-Sensing Array) */}
      <section className="py-24 px-4 bg-primary relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <div className="flex items-center text-consumer mb-4">
                 <Activity className="mr-3" />
                 <span className="font-mono text-sm tracking-widest uppercase">Advanced Bio-Sensing Array</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">Micro-Pattern Analysis</h2>
              <p className="text-gray-400 font-body mb-8 leading-relaxed">
                 The ring doesn't just measure heart rate. It detects <strong>micro-patterns</strong>—minute variations in skin temperature, HRV, and electrodermal activity.
              </p>
              
              <ul className="space-y-6 mb-10">
                 <li className="flex items-start">
                    <div className="w-1 h-full min-h-[40px] bg-gradient-to-b from-consumer to-transparent mr-4"></div>
                    <div>
                       <h4 className="text-white font-bold">Recovery Score</h4>
                       <p className="text-sm text-gray-500">Comprehensive daily readiness metric.</p>
                    </div>
                 </li>
                 <li className="flex items-start">
                    <div className="w-1 h-full min-h-[40px] bg-gradient-to-b from-consumerGold to-transparent mr-4"></div>
                    <div>
                       <h4 className="text-white font-bold">Stress Readiness</h4>
                       <p className="text-sm text-gray-500">Capacity to handle physical or mental load.</p>
                    </div>
                 </li>
                 <li className="flex items-start">
                    <div className="w-1 h-full min-h-[40px] bg-gradient-to-b from-purple-500 to-transparent mr-4"></div>
                    <div>
                       <h4 className="text-white font-bold">Emotional Map</h4>
                       <p className="text-sm text-gray-500">
                         Deduces states (Calm, Focused, Stressed) from bio-signals.
                       </p>
                    </div>
                 </li>
              </ul>
           </div>

           <div className="bg-[#080808] border border-white/10 p-6 rounded-xl shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                 <h3 className="text-sm font-bold uppercase text-gray-400">Live Biometrics</h3>
                 <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-consumer animate-pulse"></span>
                    <span className="text-xs text-consumer font-mono">RECORDING</span>
                 </div>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={recoveryData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                    <XAxis dataKey="name" stroke="#555" fontSize={10} tickLine={false} />
                    <YAxis stroke="#555" fontSize={10} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#101010', border: '1px solid #333' }}
                      itemStyle={{ color: '#ccc' }}
                    />
                    <Line type="monotone" dataKey="recovery" stroke="#00C896" strokeWidth={2} dot={{r: 3, fill: '#00C896'}} />
                    <Line type="monotone" dataKey="stress" stroke="#FFD700" strokeWidth={2} dot={false} strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between mt-4 text-xs font-mono text-gray-500">
                 <div className="flex items-center"><div className="w-3 h-1 bg-consumer mr-2"></div> RECOVERY</div>
                 <div className="flex items-center"><div className="w-3 h-1 bg-consumerGold mr-2"></div> STRESS</div>
              </div>
           </div>
        </div>
      </section>

      {/* MODULE 4: CONNETTIVITÀ E CONDIVISIONE SICURA */}
      <section className="py-24 bg-[#0a0a0a]">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* Global eSIM */}
               <div className="p-10 border border-white/5 bg-primary rounded-xl flex flex-col justify-between group hover:border-consumer/30 transition-colors">
                  <div>
                     <Globe className="text-consumer mb-6" size={40} />
                     <h3 className="text-2xl font-bold text-white mb-4">Global eSIM Connectivity</h3>
                     <p className="text-gray-400 font-body leading-relaxed">
                        Stay connected 24/7, independent of your smartphone. Whether jogging in the park or traveling internationally, your ring remains online and syncing.
                     </p>
                  </div>
                  <div className="mt-8 flex items-center text-xs font-mono text-gray-500">
                     <Wifi size={12} className="mr-2" />
                     ALWAYS-ON NETWORK
                  </div>
               </div>

               {/* Trusted Circle */}
               <div className="p-10 border border-white/5 bg-primary rounded-xl flex flex-col justify-between group hover:border-consumer/30 transition-colors">
                  <div>
                     <Share2 className="text-consumer mb-6" size={40} />
                     <h3 className="text-2xl font-bold text-white mb-4">Trusted Circle Status Sharing</h3>
                     <p className="text-gray-400 font-body leading-relaxed mb-4">
                        Manage contact permissions to share your emotional status with loved ones.
                     </p>
                     <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                        <h4 className="text-white text-sm font-bold mb-2">Ring-to-Ring Connection</h4>
                        <p className="text-xs text-gray-400">
                           Emotional signals are exchanged via <span className="text-consumer">1-3 byte encrypted packets</span>. This feature works completely <strong>OFFLINE</strong> without internet.
                        </p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* MODULE 5: DESIGN E DURABILITÀ */}
      <section className="py-24 px-4 bg-primary">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="flex-1 order-2 md:order-1">
                  <img 
                    src="https://picsum.photos/800/600?grayscale&blur=1" 
                    alt="Design Detail" 
                    className="rounded-lg opacity-80 shadow-2xl border border-white/10"
                  />
               </div>
               <div className="flex-1 order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-8">Designed for Life.</h2>
                  
                  <div className="space-y-8">
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                           <Activity className="mr-2 text-consumerGold" size={20}/>
                           360° Curved OLED
                        </h3>
                        <p className="text-gray-400 text-sm">
                           Discreet, always-on display. View rapid information, notifications, and your recovery score directly on the ring without breaking flow.
                        </p>
                     </div>
                     
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                           <Droplets className="mr-2 text-consumerGold" size={20}/>
                           IP68+ & Hypoallergenic
                        </h3>
                        <p className="text-gray-400 text-sm">
                           Water and dust resistant for continuous wear. Crafted from aerospace-grade Titanium and hypoallergenic materials for 24/7 comfort.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* MODULE 6: LA PROMESSA DI PRIVACY */}
      <section className="py-20 bg-white/5 border-t border-white/10">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block p-4 rounded-full bg-white/5 mb-6">
               <Lock className="text-consumer" size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-6">Your Data. Your Device.</h2>
            <p className="text-lg text-gray-400 font-body mb-8">
               We believe privacy is the ultimate luxury. Utilizing <strong className="text-white">TinyML</strong> architecture, all emotional inference happens locally on the processor.
            </p>
            <div className="inline-flex items-center px-6 py-3 border border-consumer/30 rounded bg-consumer/5 text-consumer font-mono text-sm">
               <ShieldCheck size={16} className="mr-3" />
               NO PERSONAL DATA LEAVES THE DEVICE
            </div>
         </div>
      </section>

      {/* MODULE 7: CALL TO ACTION (CTA) */}
      <section className="py-24 bg-primary text-center border-t border-white/10">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Elevate Your Daily Performance</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
               <button className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold text-lg rounded hover:bg-consumer hover:text-white transition-colors shadow-lg">
                  Buy Consumer Edition
               </button>
               <Link to="/tactical" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-gray-700 text-gray-300 font-bold text-lg rounded hover:border-tactical hover:text-tactical transition-colors flex items-center justify-center">
                  Compare Tactical Edition <ArrowRight size={18} className="ml-2" />
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};