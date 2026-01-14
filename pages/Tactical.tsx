import React from 'react';
import { Radio, ShieldAlert, Flame, Zap, Crosshair, Users, WifiOff, AlertTriangle, ChevronRight, Lock } from 'lucide-react';
import { TACTICAL_FEATURES } from '../constants';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const radarData = [
  { subject: 'Durability', A: 150, fullMark: 150 },
  { subject: 'Range', A: 140, fullMark: 150 },
  { subject: 'Battery', A: 120, fullMark: 150 },
  { subject: 'Encryption', A: 150, fullMark: 150 },
  { subject: 'Sensors', A: 130, fullMark: 150 },
  { subject: 'Weight', A: 90, fullMark: 150 },
];

export const Tactical: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-tactical selection:text-white">
      
      {/* MODULE 1: TITOLO E DICHIARAZIONE DI MISSIONE */}
      <section className="relative min-h-[85vh] flex items-center px-4 bg-[#0a0a0a] border-b border-tactical/20 overflow-hidden">
        {/* Tactical Grid Background */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{backgroundImage: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)", backgroundSize: "40px 40px"}}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-0"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 border border-tactical text-tactical text-xs font-bold uppercase tracking-widest mb-6 bg-tactical/5">
              <Crosshair size={14} className="mr-2" />
              Operational Edition
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold uppercase mb-4 leading-none tracking-tight">
              ONE RING.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical to-red-600">
                TWO WORLDS.
              </span>
            </h1>
            <h2 className="text-2xl text-gray-300 font-mono mb-8 border-l-4 border-tactical pl-6">
              Precision in Performance.
            </h2>
            <p className="text-lg text-gray-400 font-body mb-10 max-w-xl leading-relaxed">
              The essential operational tool for elite safety and tactical connectivity. 
              Secure. Rugged. Offline.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-tactical hover:bg-red-800 text-white px-8 py-4 font-bold uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(165,42,42,0.4)] border border-transparent hover:border-red-500">
                Deploy Tactical
              </button>
              <button className="bg-transparent border border-gray-700 text-gray-300 hover:text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                View Specs
              </button>
            </div>
          </div>
          
          {/* HUD Visualization */}
          <div className="order-1 lg:order-2 relative flex justify-center">
             <div className="relative w-full max-w-md aspect-square bg-black/40 border border-white/10 rounded-full backdrop-blur-sm p-2 shadow-2xl">
                <div className="absolute top-4 left-0 right-0 text-center text-[10px] text-tactical font-mono animate-pulse">
                   /// SYSTEM DIAGNOSTIC: OPTIMAL ///
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                    <PolarGrid stroke="#333" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 10, fontFamily: 'monospace' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                    <Radar
                      name="Capabilities"
                      dataKey="A"
                      stroke="#A52A2A"
                      strokeWidth={2}
                      fill="#A52A2A"
                      fillOpacity={0.4}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                {/* Decorative Reticle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-tactical/20 rounded-full pointer-events-none"></div>
                <div className="absolute top-1/2 left-0 w-4 h-[1px] bg-tactical/50"></div>
                <div className="absolute top-1/2 right-0 w-4 h-[1px] bg-tactical/50"></div>
                <div className="absolute top-0 left-1/2 w-[1px] h-4 bg-tactical/50"></div>
                <div className="absolute bottom-0 left-1/2 w-[1px] h-4 bg-tactical/50"></div>
             </div>
          </div>
        </div>
      </section>

      {/* MODULE 2: CERTIFICAZIONI MILITARI E DURABILITÀ ESTREMA */}
      <section className="py-20 px-4 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
           <div className="mb-12 border-b border-white/10 pb-6 flex items-end justify-between">
              <div>
                 <h2 className="text-3xl font-bold uppercase mb-2 text-white">Extreme Durability Standards</h2>
                 <p className="text-gray-500 font-mono text-xs">CERTIFIED FOR CRITICAL ENVIRONMENTS</p>
              </div>
              <ShieldAlert className="text-tactical hidden md:block" size={40} />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* MIL-STD-810H */}
              <div className="bg-[#111] p-6 border-l-2 border-tactical hover:bg-[#151515] transition-colors group">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl font-bold text-gray-700 group-hover:text-gray-500 transition-colors">01</span>
                    <ShieldAlert className="text-tactical" size={24}/>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">MIL-STD-810H</h3>
                 <p className="text-sm text-gray-400 font-body mb-4">
                    Certified for environmental engineering considerations.
                 </p>
                 <div className="bg-black/50 p-2 rounded text-xs font-mono text-gray-300">
                    <span className="text-tactical">TEMP:</span> -30°C TO +70°C
                 </div>
              </div>

              {/* MIL-STD-461G */}
              <div className="bg-[#111] p-6 border-l-2 border-gray-700 hover:border-tactical transition-colors group">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl font-bold text-gray-700 group-hover:text-gray-500 transition-colors">02</span>
                    <Zap className="text-tactical" size={24}/>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">MIL-STD-461G</h3>
                 <p className="text-sm text-gray-400 font-body mb-4">
                    Electromagnetic compatibility (EMC). Operates in high-interference zones without signal degradation.
                 </p>
              </div>

              {/* NFPA 1971 */}
              <div className="bg-[#111] p-6 border-l-2 border-gray-700 hover:border-tactical transition-colors group">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl font-bold text-gray-700 group-hover:text-gray-500 transition-colors">03</span>
                    <Flame className="text-tactical" size={24}/>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">NFPA 1971</h3>
                 <p className="text-sm text-gray-400 font-body mb-4">
                    Heat and flame resistance compliance. Critical standard for first responders and firefighters.
                 </p>
              </div>

              {/* MATERIAL */}
              <div className="bg-[#111] p-6 border-l-2 border-gray-700 hover:border-tactical transition-colors group">
                 <div className="flex justify-between items-start mb-4">
                    <span className="text-4xl font-bold text-gray-700 group-hover:text-gray-500 transition-colors">04</span>
                    <Lock className="text-tactical" size={24}/>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">TITANIUM SHELL</h3>
                 <p className="text-sm text-gray-400 font-body mb-4">
                    Reinforced aerospace-grade titanium chassis. Impact resistant and lightweight.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* MODULE 3: CONNETTIVITÀ TATTICA E RETE MESH OFFLINE */}
      <section className="py-24 px-4 bg-[#050505] relative border-y border-white/5">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Diagramma Mesh */}
            <div className="order-2 lg:order-1 relative bg-black border border-white/10 rounded-lg p-6 overflow-hidden">
               <div className="absolute top-4 left-4 z-10">
                  <span className="bg-tactical/20 text-tactical text-xs font-bold px-2 py-1 rounded border border-tactical/30">SUB-GHZ RADIO</span>
               </div>
               
               {/* Grid Visualization */}
               <div className="w-full h-[400px] grid grid-cols-6 grid-rows-6 gap-0 relative opacity-60">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="border border-white/5"></div>
                  ))}
               </div>

               {/* Nodes */}
               <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-tactical rounded-full shadow-[0_0_15px_#A52A2A] z-20 animate-pulse"></div>
               <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-white/20 rounded-full border border-white/50 z-20"></div>
               <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-white/20 rounded-full border border-white/50 z-20"></div>
               
               {/* Range Circles */}
               <div className="absolute top-1/4 left-1/4 w-32 h-32 -translate-x-1/2 -translate-y-1/2 border border-tactical/30 rounded-full"></div>
               <div className="absolute top-1/4 left-1/4 w-64 h-64 -translate-x-1/2 -translate-y-1/2 border border-tactical/10 rounded-full"></div>

               {/* Connection Lines */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                 <line x1="25%" y1="25%" x2="66%" y2="66%" stroke="#A52A2A" strokeWidth="1" strokeDasharray="4 2" />
                 <line x1="25%" y1="25%" x2="33%" y2="75%" stroke="#A52A2A" strokeWidth="1" strokeDasharray="4 2" />
               </svg>

               <div className="absolute bottom-4 right-4 text-right">
                  <div className="text-2xl font-bold text-white">10km+</div>
                  <div className="text-xs text-gray-500 font-mono">MULTI-HOP COVERAGE (10 RINGS)</div>
               </div>
            </div>

            <div className="order-1 lg:order-2">
               <div className="flex items-center text-tactical mb-4">
                  <Radio className="mr-3" />
                  <span className="font-mono text-sm tracking-widest uppercase">Infrastructure-Less Ops</span>
               </div>
               <h2 className="text-4xl font-bold mb-6">Squad Mesh Networking</h2>
               <p className="text-gray-400 font-body mb-8 leading-relaxed">
                  When standard networks fail, the Ring creates its own.
               </p>
               
               <div className="space-y-8">
                  <div>
                     <h3 className="text-xl font-bold text-white mb-2">Sub-GHz Penetration</h3>
                     <p className="text-sm text-gray-400">
                        Utilizing 433/868/915 MHz frequencies to penetrate thick concrete, bunkers, and dense urban structures better than 2.4GHz signals.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-white mb-2">Multi-Hop Expansion</h3>
                     <p className="text-sm text-gray-400">
                        Daisy-chain connectivity. Each ring acts as a repeater. A squad of 10 separated by 1km each creates a <strong className="text-white">10km+ operational line</strong> without cellular towers.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* MODULE 4: FUNZIONALITÀ CRITICHE (CBRN) */}
      <section className="py-20 bg-[#111]">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-red-900/10 border border-red-900/30 p-8 rounded-lg">
                  <div className="flex items-center justify-between mb-6">
                     <h3 className="text-2xl font-bold text-white">CBRN Threat Awareness</h3>
                     <AlertTriangle className="text-tactical" size={32} />
                  </div>
                  <p className="text-gray-300 mb-6">
                     Integrated sensors for real-time detection of invisible threats.
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-sm font-mono text-gray-400">
                     <li className="flex items-center"><div className="w-2 h-2 bg-tactical mr-2"></div> CHEMICAL</li>
                     <li className="flex items-center"><div className="w-2 h-2 bg-tactical mr-2"></div> BIOLOGICAL</li>
                     <li className="flex items-center"><div className="w-2 h-2 bg-tactical mr-2"></div> RADIOLOGICAL</li>
                     <li className="flex items-center"><div className="w-2 h-2 bg-tactical mr-2"></div> NUCLEAR</li>
                  </ul>
               </div>

               <div className="bg-white/5 border border-white/10 p-8 rounded-lg flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-6">
                     <h3 className="text-2xl font-bold text-white">Secure SOS & Beacon</h3>
                     <WifiOff className="text-white" size={32} />
                  </div>
                  <p className="text-gray-300 mb-6">
                     Instant activation of emergency beacon via haptic gestures. Coordinates broadcasted via Mesh to squad members only.
                  </p>
                  <div className="mt-auto">
                     <span className="text-xs font-bold bg-white text-black px-2 py-1 rounded">SILENT ACTIVATION</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* MODULE 5: COMUNICAZIONE DI SQUADRA (Sync Emotivo Silenzioso) */}
      <section className="py-24 px-4 bg-[#050505] border-t border-white/5">
         <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Silent Squad Sync</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
               Non-verbal communication based on physiological status. The Squad Leader knows the team's readiness without a word spoken.
            </p>
         </div>

         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded text-left">
               <div className="text-tactical font-mono text-sm mb-4">01 // ENCRYPTION</div>
               <h3 className="text-xl font-bold text-white mb-3">1-3 Byte Packets</h3>
               <p className="text-gray-500 text-sm">
                  Ultra-lightweight encrypted data packets. Virtually impossible to intercept or jam due to minimal airtime and tiny footprint.
               </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded text-left relative overflow-hidden">
               <div className="absolute top-0 right-0 w-16 h-16 bg-tactical/10 rounded-bl-full"></div>
               <div className="text-tactical font-mono text-sm mb-4">02 // OFFLINE</div>
               <h3 className="text-xl font-bold text-white mb-3">Zero Internet</h3>
               <p className="text-gray-500 text-sm">
                  The sync functions completely offline using the Mesh network. No cloud servers. No data leakage.
               </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded text-left">
               <div className="text-tactical font-mono text-sm mb-4">03 // INSIGHT</div>
               <h3 className="text-xl font-bold text-white mb-3">Biometric Insight</h3>
               <p className="text-gray-500 text-sm">
                  App visualizes <strong>Stress Readiness</strong> and <strong>Emotional Maps</strong> of the entire squad derived from micro-pattern analysis (HRV, Temp, Galvanic).
               </p>
            </div>
         </div>
      </section>

      {/* MODULE 6: CTA OPERATIVO */}
      <section className="py-20 bg-[#A52A2A] text-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold uppercase mb-4">Equip Your Team</h2>
            <p className="text-white/80 mb-10 text-lg">
               Bulk procurement and custom integration available for Government and Corporate Defense entities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button className="bg-black text-white border border-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors shadow-xl">
                  Order Tactical Edition
               </button>
               <button className="bg-transparent border-2 border-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-[#A52A2A] transition-colors">
                  Contact Sales Dept.
               </button>
            </div>
         </div>
      </section>

    </div>
  );
};