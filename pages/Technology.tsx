import React from 'react';
import { Cpu, Layers, Battery, Eye, Wifi, Radio, ShieldCheck, Zap, Activity, Database, Lock, Globe, Server, Brain, WifiOff } from 'lucide-react';

export const Technology: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-tech selection:text-black">
      
      {/* MODULE 1: TITOLO E I TRE PILASTRI */}
      <section className="relative py-24 border-b border-white/10 bg-blueprint overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block border border-tech/30 bg-tech/5 px-4 py-1 rounded mb-6">
            <span className="text-tech font-mono text-xs tracking-[0.3em]">ENGINEERING_BLUEPRINT_V2.0</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
            PRECISION <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech to-blue-600">ENGINEERING</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono mb-16">
            Hardware architecture defined by three non-negotiable pillars:
            Immersion, Independence, and Intelligence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { title: "OLED Display", desc: "Always-on visual feedback.", icon: Layers },
              { title: "eSIM Connectivity", desc: "Global independence.", icon: Globe },
              { title: "Offline AI", desc: "Zero-latency privacy.", icon: Cpu }
            ].map((item, idx) => (
              <div key={idx} className="bg-black/50 backdrop-blur-sm border border-white/10 p-8 rounded hover:border-tech/50 transition-all group">
                 <item.icon className="text-tech mb-4 group-hover:scale-110 transition-transform" size={32} />
                 <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                 <p className="text-sm text-gray-400 font-mono">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULE 2: DESIGN E COSTRUZIONE MICRO-TECNOLOGICA */}
      <section className="py-24 px-4 bg-[#080808] border-b border-white/5">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Exploded View Diagram */}
            <div className="relative h-[500px] border border-tech/20 bg-black/40 rounded-lg flex items-center justify-center p-8">
               <div className="absolute top-4 left-4 text-[10px] text-tech font-mono">
                  FIG 2.1: CROSS-SECTION ANALYSIS
               </div>
               
               {/* Simplified Exploded Representation */}
               <div className="relative w-64 h-64">
                  {/* Outer Shell */}
                  <div className="absolute inset-0 rounded-full border-[12px] border-[#333] shadow-2xl z-30"></div>
                  {/* Battery Layer */}
                  <div className="absolute inset-2 rounded-full border-[4px] border-tech/30 z-20"></div>
                  {/* Inner Sensors */}
                  <div className="absolute inset-4 rounded-full border-[2px] border-tech/10 bg-black z-10"></div>
                  
                  {/* Pointers */}
                  <div className="absolute -right-12 top-0 flex items-center">
                     <div className="w-12 h-[1px] bg-tech"></div>
                     <span className="ml-2 text-xs font-mono text-white bg-black px-1 border border-tech/30">TITANIUM SHELL</span>
                  </div>
                  <div className="absolute -left-12 bottom-10 flex items-center flex-row-reverse">
                     <div className="w-12 h-[1px] bg-tech"></div>
                     <span className="mr-2 text-xs font-mono text-white bg-black px-1 border border-tech/30">&lt; 0.25mm OLED</span>
                  </div>
               </div>
            </div>

            <div className="space-y-12">
               <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Micro-Tech Construction</h2>
                  <div className="h-1 w-20 bg-tech mb-8"></div>
                  
                  <div className="space-y-8">
                     <div className="flex gap-4">
                        <div className="p-3 bg-white/5 h-fit rounded"><Layers size={24} className="text-white"/></div>
                        <div>
                           <h3 className="text-xl font-bold text-white mb-1">Titanium Reinforced Shell</h3>
                           <p className="text-gray-400 font-body text-sm">
                              Aerospace-grade Titanium chassis providing structural integrity while maintaining lightweight profile.
                           </p>
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <div className="p-3 bg-white/5 h-fit rounded"><Eye size={24} className="text-white"/></div>
                        <div>
                           <h3 className="text-xl font-bold text-white mb-1">360° Curved AMOLED</h3>
                           <p className="text-gray-400 font-body text-sm">
                              A feat of engineering. The display is bonded directly to the curve with a thickness of <strong className="text-white">&lt;0.25 mm</strong>.
                           </p>
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <div className="p-3 bg-white/5 h-fit rounded"><Battery size={24} className="text-white"/></div>
                        <div>
                           <h3 className="text-xl font-bold text-white mb-1">Flat-Stack Micro-Battery</h3>
                           <p className="text-gray-400 font-body text-sm">
                              Innovative anode arrangement allows the battery array to flex within the ring curvature without capacity loss.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* MODULE 3: INTELLIGENZA ARTIFICIALE E PROCESSORE (Offline) */}
      <section className="py-24 bg-[#050505] border-b border-white/5 relative overflow-hidden">
         {/* Background Binary */}
         <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5 pointer-events-none font-mono text-[10px] break-all">
            01010101010101111000101010101001010101010101110101010101010101001010101...
         </div>

         <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">TinyML Architecture</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
               Processing power that respects your sovereignty.
            </p>
         </div>

         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-lg">
               <Cpu className="text-tech mb-6" size={40} />
               <h3 className="text-xl font-bold text-white mb-4">Neural Core</h3>
               <p className="text-sm text-gray-400 mb-4">
                  Dedicated TinyML neural processing unit designed specifically for low-power biometric inference.
               </p>
               <div className="text-xs font-mono text-tech">LATENCY: &lt; 5ms</div>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-lg relative overflow-hidden">
               <div className="absolute -right-4 -top-4 bg-tech/10 w-24 h-24 rounded-full blur-xl"></div>
               <Server className="text-tech mb-6" size={40} />
               <h3 className="text-xl font-bold text-white mb-4">Local Inference</h3>
               <p className="text-sm text-gray-400 mb-4">
                  Emotional deduction algorithms run 100% on the silicon. No cloud API calls for analysis.
               </p>
               <div className="text-xs font-mono text-tech">STATUS: ON-DEVICE</div>
            </div>

            <div className="bg-[#0a0a0a] border border-tech/30 p-8 rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.05)]">
               <Lock className="text-tech mb-6" size={40} />
               <h3 className="text-xl font-bold text-white mb-4">Data Silo Promise</h3>
               <p className="text-sm text-gray-400 mb-4">
                  Architecture ensures that <span className="text-white font-bold">no personal data leaves the device</span>. 
               </p>
               <div className="inline-flex items-center text-xs font-mono text-green-400 border border-green-400/30 px-2 py-1 rounded">
                  <ShieldCheck size={10} className="mr-1"/> VERIFIED
               </div>
            </div>
         </div>
      </section>

      {/* MODULE 4: CONNETTIVITÀ AVANZATA */}
      <section className="py-24 bg-[#080808]">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               
               {/* Global Connectivity */}
               <div className="p-10 border border-white/10 rounded-lg bg-[#050505]">
                  <Globe className="text-white mb-6" size={48} />
                  <h3 className="text-2xl font-bold text-white mb-2">Global eSIM 24/7</h3>
                  <p className="text-gray-400 mb-6">
                     Independent cellular stack allows the ring to maintain a connection to global networks without a companion smartphone.
                  </p>
                  <ul className="space-y-2 text-sm font-mono text-gray-500">
                     <li className="flex items-center"><div className="w-1 h-1 bg-white mr-2"></div> LTE-M / NB-IoT Support</li>
                     <li className="flex items-center"><div className="w-1 h-1 bg-white mr-2"></div> Low Power Consumption</li>
                  </ul>
               </div>

               {/* Tactical Connectivity */}
               <div className="p-10 border border-white/10 rounded-lg bg-[#050505]">
                  <Radio className="text-tactical mb-6" size={48} />
                  <h3 className="text-2xl font-bold text-white mb-2">Offline Tactical Mesh</h3>
                  <p className="text-gray-400 mb-6">
                     Infrastructure-less networking for squad operations.
                  </p>
                  <div className="space-y-4">
                     <div className="p-4 border border-white/5 bg-white/5 rounded">
                        <span className="block text-xs text-gray-400 uppercase tracking-widest mb-1">Frequency Penetration</span>
                        <div className="text-white font-bold">Sub-GHz (433/868/915 MHz)</div>
                        <div className="text-xs text-gray-500 mt-1">Optimized for concrete & structure penetration.</div>
                     </div>
                     <div className="p-4 border border-white/5 bg-white/5 rounded">
                        <span className="block text-xs text-gray-400 uppercase tracking-widest mb-1">Multi-Hop Expansion</span>
                        <div className="text-white font-bold">10 Rings &#8594; 10km+</div>
                        <div className="text-xs text-gray-500 mt-1">Daisy-chain signal repeating.</div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* MODULE 5: SENSORISTICA E DATI */}
      <section className="py-24 bg-blueprint border-y border-white/10">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-white">Advanced Sensor Array</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <div className="bg-black/80 backdrop-blur border-t-2 border-tech p-6">
                  <Activity className="text-gray-400 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Micro-Pattern Analysis</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                     High-frequency sampling of skin temperature, HRV, and galvanic response to detect minute biological variances.
                  </p>
               </div>
               
               <div className="bg-black/80 backdrop-blur border-t-2 border-tech p-6">
                  <Brain className="text-gray-400 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Emotional Deduction</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                     Algorithmic translation of bio-data into emotional states: <span className="text-white">Calm, Focused, Stressed</span>.
                  </p>
               </div>

               <div className="bg-black/80 backdrop-blur border-t-2 border-tech p-6">
                  <WifiOff className="text-gray-400 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Ring-to-Ring Sync</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                     Encrypted exchange of emotional status using <span className="text-tech">1-3 byte packets</span>. Works completely offline.
                  </p>
               </div>

               <div className="bg-black/80 backdrop-blur border-t-2 border-tactical p-6">
                  <ShieldCheck className="text-gray-400 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">CBRN Sensor (Tactical)</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                     Specialized hardware for detecting Chemical, Biological, Radiological, and Nuclear trace elements.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* MODULE 6: STANDARDS E CERTIFICAZIONI */}
      <section className="py-24 px-4 bg-[#050505]">
         <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Certified Standards</h2>
            
            <div className="overflow-x-auto">
               <table className="w-full border-collapse border border-white/10 text-left">
                  <thead>
                     <tr className="bg-white/5">
                        <th className="p-4 border-b border-white/10 font-mono text-sm text-gray-400 w-1/3">STANDARD TYPE</th>
                        <th className="p-4 border-b border-white/10 font-mono text-sm text-tactical w-1/3">TACTICAL EDITION</th>
                        <th className="p-4 border-b border-white/10 font-mono text-sm text-consumer w-1/3">CONSUMER EDITION</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm text-gray-300">
                     <tr>
                        <td className="p-4 font-bold">Durability</td>
                        <td className="p-4 font-mono">MIL-STD-810H (-30°C to +70°C)</td>
                        <td className="p-4 font-mono">IP68+ (Water/Dust Resistant)</td>
                     </tr>
                     <tr>
                        <td className="p-4 font-bold">Electromagnetic</td>
                        <td className="p-4 font-mono">MIL-STD-461G (High Interference)</td>
                        <td className="p-4 font-mono">Standard FCC/CE Compliance</td>
                     </tr>
                     <tr>
                        <td className="p-4 font-bold">Safety</td>
                        <td className="p-4 font-mono">NFPA 1971 (Fire/Heat Resistant)</td>
                        <td className="p-4 font-mono">Hypoallergenic Materials</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

    </div>
  );
};