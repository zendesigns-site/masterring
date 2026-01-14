import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Globe, Cpu, Layers, DollarSign, PieChart, ArrowRight, FileText, Lock, Users, Briefcase } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const growthData = [
  { year: '2024', consumer: 20, tactical: 10 },
  { year: '2025', consumer: 45, tactical: 25 },
  { year: '2026', consumer: 80, tactical: 50 },
  { year: '2027', consumer: 130, tactical: 90 },
];

export const Investors: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-white selection:text-black">
      
      {/* MODULE 1: VISIONE E OPPORTUNITÀ DI MERCATO */}
      <section className="relative py-24 px-4 bg-primary overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center px-3 py-1 border border-white/20 bg-white/5 text-xs font-mono tracking-widest mb-6 rounded">
            <TrendingUp size={14} className="mr-2 text-tech" />
            INVESTOR RELATIONS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            PRECISION UNLOCKS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              VALUE.
            </span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-3xl leading-relaxed mb-12">
            Leveraging a <strong>"One Ring. Two Worlds."</strong> dual-market strategy to capture high-volume wellness subscriptions and high-margin defense contracts simultaneously.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
             <div>
                <div className="text-4xl font-bold text-white mb-2">$50B+</div>
                <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">Addressable Market (TAM)</div>
                <p className="text-xs text-gray-400 mt-2">Combined Wellness & Defense Wearable Sectors</p>
             </div>
             <div>
                <div className="text-4xl font-bold text-white mb-2">2X</div>
                <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">Revenue Streams</div>
                <p className="text-xs text-gray-400 mt-2">Diversified B2C Recurring & B2G Contracts</p>
             </div>
             <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm font-mono text-gray-500 uppercase tracking-widest">Data Sovereignty</div>
                <p className="text-xs text-gray-400 mt-2">Proprietary Privacy Architecture</p>
             </div>
          </div>
        </div>
      </section>

      {/* MODULE 2: VANTAGGIO TECNOLOGICO (IP MOAT) */}
      <section className="py-24 bg-[#080808]">
         <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16">
               <h2 className="text-3xl font-bold text-white mb-4">The Technological Moat</h2>
               <p className="text-gray-400 max-w-2xl">
                  Our valuation is underpinned by hard-to-replicate intellectual property and precision engineering.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* IP 1: AI */}
               <div className="p-8 border border-white/10 bg-[#050505] rounded-lg hover:border-tech/50 transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mb-6 group-hover:bg-tech/10">
                     <Cpu className="text-tech" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">TinyML Architecture</h3>
                  <p className="text-sm text-gray-400 font-body mb-4">
                     <strong>Proprietary Offline Inference.</strong> We have solved the latency and privacy bottleneck by processing biometrics on-device.
                  </p>
                  <div className="text-xs font-mono text-green-400 flex items-center">
                     <Lock size={12} className="mr-1" /> PATENT PENDING
                  </div>
               </div>

               {/* IP 2: Hardware */}
               <div className="p-8 border border-white/10 bg-[#050505] rounded-lg hover:border-white/30 transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mb-6 group-hover:bg-white/10">
                     <Layers className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Micro-Engineering</h3>
                  <p className="text-sm text-gray-400 font-body mb-4">
                     <strong>&lt;0.25mm 360° OLED & Flat-Stack Battery.</strong> Manufacturing processes that create significant barriers to entry for competitors.
                  </p>
                  <div className="text-xs font-mono text-gray-500">
                     HARDWARE DEFENSIBILITY
                  </div>
               </div>

               {/* IP 3: Connectivity */}
               <div className="p-8 border border-white/10 bg-[#050505] rounded-lg hover:border-tactical/50 transition-colors group">
                  <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center mb-6 group-hover:bg-tactical/10">
                     <Globe className="text-tactical" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Mesh Strategy</h3>
                  <p className="text-sm text-gray-400 font-body mb-4">
                     <strong>Sub-GHz & eSIM.</strong> Unique capability to serve high-value defense markets (Tactical) that require infrastructure-less comms.
                  </p>
                  <div className="text-xs font-mono text-tactical">
                     DUAL-USE TECHNOLOGY
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* MODULE 3: LA STRATEGIA DEL DOPPIO MERCATO (THE SPLIT) */}
      <section className="py-24 bg-white/5 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               
               <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Business Model: <br/>The Strategic Split</h2>
                  <p className="text-gray-400 font-body mb-8 leading-relaxed">
                     By utilizing a shared hardware chassis with divergent software and sensor stacks, we maximize manufacturing efficiency while capturing two distinct economic engines.
                  </p>

                  <div className="space-y-6">
                     {/* Consumer Model */}
                     <div className="p-6 bg-black border-l-4 border-consumer rounded-r-lg">
                        <div className="flex justify-between items-center mb-2">
                           <h3 className="text-xl font-bold text-white">Consumer Edition</h3>
                           <Users className="text-consumer" size={20} />
                        </div>
                        <div className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wide">Wellness & Lifestyle</div>
                        <p className="text-sm text-gray-400 mb-3">
                           High volume acquisition with long-tail recurring revenue via <strong>DUBO™</strong> software subscriptions.
                        </p>
                        <ul className="text-xs text-gray-300 space-y-1 font-mono">
                           <li>+ Subscription ARR</li>
                           <li>+ Network Effects (Trusted Circle)</li>
                        </ul>
                     </div>

                     {/* Tactical Model */}
                     <div className="p-6 bg-black border-l-4 border-tactical rounded-r-lg">
                        <div className="flex justify-between items-center mb-2">
                           <h3 className="text-xl font-bold text-white">Tactical Edition</h3>
                           <Shield className="text-tactical" size={20} />
                        </div>
                        <div className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-wide">B2G & Defense</div>
                        <p className="text-sm text-gray-400 mb-3">
                           High-margin unit sales via government contracts. Stickiness ensured by MIL-STD certifications and Squad Mesh integration.
                        </p>
                        <ul className="text-xs text-gray-300 space-y-1 font-mono">
                           <li>+ High Unit Margins</li>
                           <li>+ Multi-Year Gov Contracts</li>
                        </ul>
                     </div>
                  </div>
               </div>

               {/* Growth Chart */}
               <div className="bg-[#050505] border border-white/10 p-8 rounded-xl shadow-2xl">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Projected Revenue Mix</h3>
                  <div className="h-64 w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={growthData} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                           <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                           <XAxis dataKey="year" stroke="#555" tickLine={false} axisLine={false} />
                           <YAxis hide />
                           <Tooltip 
                              contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }}
                              cursor={{fill: 'transparent'}}
                           />
                           <Bar dataKey="consumer" stackId="a" fill="#00C896" barSize={40} />
                           <Bar dataKey="tactical" stackId="a" fill="#A52A2A" barSize={40} />
                        </BarChart>
                     </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center gap-8 mt-6 text-xs font-mono">
                     <div className="flex items-center"><div className="w-3 h-3 bg-consumer mr-2"></div> CONSUMER ARR</div>
                     <div className="flex items-center"><div className="w-3 h-3 bg-tactical mr-2"></div> TACTICAL CONTRACTS</div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* MODULE 4: PERFORMANCE E GOVERNANCE */}
      <section className="py-24 px-4 bg-[#050505]">
         <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Governance & Reports</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded hover:border-white/30 transition-colors flex items-center justify-between cursor-pointer">
                  <div className="flex items-center">
                     <FileText className="text-gray-400 mr-4" />
                     <div>
                        <h4 className="text-white font-bold">Annual Report 2023</h4>
                        <p className="text-xs text-gray-500">PDF Download (2.4MB)</p>
                     </div>
                  </div>
                  <ArrowRight size={16} className="text-gray-500" />
               </div>

               <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded hover:border-white/30 transition-colors flex items-center justify-between cursor-pointer">
                  <div className="flex items-center">
                     <PieChart className="text-gray-400 mr-4" />
                     <div>
                        <h4 className="text-white font-bold">Q3 2024 Financial Results</h4>
                        <p className="text-xs text-gray-500">Presentation Deck</p>
                     </div>
                  </div>
                  <ArrowRight size={16} className="text-gray-500" />
               </div>
               
               <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded hover:border-white/30 transition-colors flex items-center justify-between cursor-pointer">
                  <div className="flex items-center">
                     <Briefcase className="text-gray-400 mr-4" />
                     <div>
                        <h4 className="text-white font-bold">Corporate Governance</h4>
                        <p className="text-xs text-gray-500">Board of Directors & Ethics</p>
                     </div>
                  </div>
                  <ArrowRight size={16} className="text-gray-500" />
               </div>

               <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded hover:border-white/30 transition-colors flex items-center justify-between cursor-pointer">
                  <div className="flex items-center">
                     <Globe className="text-gray-400 mr-4" />
                     <div>
                        <h4 className="text-white font-bold">Press Releases</h4>
                        <p className="text-xs text-gray-500">Latest Financial News</p>
                     </div>
                  </div>
                  <ArrowRight size={16} className="text-gray-500" />
               </div>
            </div>
         </div>
      </section>

      {/* MODULE 5: CONTATTO E RISORSE */}
      <section className="py-20 bg-primary border-t border-white/10 text-center">
         <div className="max-w-3xl mx-auto px-4">
            <DollarSign className="mx-auto text-tech mb-6" size={48} />
            <h2 className="text-4xl font-bold mb-6">Invest in Precision</h2>
            <p className="text-gray-400 mb-10 text-lg">
               Join us in defining the future of biometric autonomy and tactical connectivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <button className="bg-white text-black px-8 py-4 font-bold rounded hover:bg-gray-200 transition-colors">
                  Contact Investor Relations
               </button>
               <Link to="/technology" className="bg-transparent border border-gray-600 text-gray-300 px-8 py-4 font-bold rounded hover:border-white hover:text-white transition-colors">
                  Validate Technology & IP
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};