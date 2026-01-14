import React, { useState } from 'react';
import { Smartphone, Lock, Share2, Activity, Brain, Heart, WifiOff, ShieldCheck, Thermometer, Zap, BarChart3, Radio, Users, Cpu, Eye, Network } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';

// Mock Data for Visualizations
const healthData = Array.from({ length: 20 }, (_, i) => ({
  time: i,
  val: 60 + Math.random() * 40,
  stress: 20 + Math.random() * 60,
  recovery: 80 - Math.random() * 20
}));

interface TabData {
  id: string;
  label: string;
  icon: React.ElementType;
  description: string;
  source: string;
  color: string;
}

const TABS: TabData[] = [
  {
    id: 'temp',
    label: 'Body Temperature',
    icon: Thermometer,
    description: "Monitoring temperature variations is crucial for detecting recovery patterns or the onset of physical stress.",
    source: "Micro-pattern analysis & Bio-Sensing Array",
    color: "#EF4444" // Red/Warm
  },
  {
    id: 'hr',
    label: 'Heart Rate (HR)',
    icon: Activity,
    description: "Key parameter used to calculate recovery state and nervous system activation.",
    source: "Micro-pattern biometric analysis",
    color: "#00C896" // Consumer Green
  },
  {
    id: 'stress',
    label: 'Stress Level',
    icon: Zap,
    description: "Dynamic tracking that contributes to deducing Emotional State and Stress Readiness.",
    source: "Micro-pattern analysis & HRV",
    color: "#F59E0B" // Amber
  },
  {
    id: 'recovery',
    label: 'Recovery Score',
    icon: BarChart3,
    description: "Synthetic score evaluating overall physical recovery. Essential for wellness optimization (DUBO™).",
    source: "App Processing Logic",
    color: "#3B82F6" // Blue
  },
  {
    id: 'readiness',
    label: 'Stress Readiness',
    icon: ShieldCheck,
    description: "Predictive indicator of capacity to face high-intensity activities or operational stress.",
    source: "App Predictive Engine",
    color: "#8B5CF6" // Purple
  },
  {
    id: 'emotion',
    label: 'Emotional Map',
    icon: Brain,
    description: "Visualization of deduced emotional states (Calm, Focused, Stressed) based on biometric patterns.",
    source: "TinyML On-Device Inference",
    color: "#EC4899" // Pink
  }
];

export const Ecosystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('hr');

  const currentTab = TABS.find(t => t.id === activeTab) || TABS[0];

  return (
    <div className="pt-16 min-h-screen bg-primary text-gray-200">
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-tech/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Biometric <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech to-white">Control Panel</span>
          </h1>
          <p className="text-xl text-gray-400 font-body leading-relaxed max-w-3xl mx-auto">
            The App acts as a data interpreter, transforming raw signals captured by the 
            <span className="text-white font-semibold"> Advanced Bio-Sensing Array</span> into immediate, actionable insights. 
            Built on a TinyML architecture ensuring all emotional inference happens locally.
          </p>
        </div>
      </section>

      {/* Interactive Biometric Dashboard */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-2xl font-bold border-l-4 border-tech pl-4 inline-block">Essential Data: Real-Time Monitoring</h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Explore the vital parameters feeding your Recovery Score and Emotional Map.
            Select a metric to visualize it on the control panel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Smartphone Visualization */}
          <div className="relative flex justify-center">
             {/* Floating Ring Graphic */}
             <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-20 hidden md:block animate-float">
                <img 
                  src="https://picsum.photos/200/200?grayscale" 
                  alt="Smart Ring" 
                  className="w-32 h-32 rounded-full border-4 border-gray-700 shadow-[0_0_30px_rgba(0,255,255,0.2)]"
                />
             </div>

             {/* Phone Body */}
             <div className="relative w-[300px] h-[600px] bg-black border-[8px] border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden z-10">
                {/* Dynamic Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-[#111] text-white flex flex-col pt-12 pb-8 px-6">
                   <div className="flex justify-between items-center mb-8">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{currentTab.label}</span>
                      <currentTab.icon size={20} style={{ color: currentTab.color }} />
                   </div>

                   {/* Dynamic Graph Area */}
                   <div className="flex-grow relative">
                      <div className="text-4xl font-bold mb-2">
                        {activeTab === 'hr' && '62 BPM'}
                        {activeTab === 'temp' && '98.4°F'}
                        {activeTab === 'stress' && 'Low'}
                        {activeTab === 'recovery' && '94%'}
                        {activeTab === 'readiness' && 'High'}
                        {activeTab === 'emotion' && 'Calm'}
                      </div>
                      <div className="text-sm text-gray-400 mb-8">Current Reading</div>

                      <div className="h-48 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          {activeTab === 'recovery' || activeTab === 'readiness' ? (
                            <BarChart data={healthData.slice(0, 7)}>
                              <Bar dataKey="recovery" fill={currentTab.color} radius={[4, 4, 0, 0]} />
                            </BarChart>
                          ) : (
                            <AreaChart data={healthData}>
                              <defs>
                                <linearGradient id={`grad-${activeTab}`} x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor={currentTab.color} stopOpacity={0.3}/>
                                  <stop offset="95%" stopColor={currentTab.color} stopOpacity={0}/>
                                </linearGradient>
                              </defs>
                              <Area 
                                type="monotone" 
                                dataKey={activeTab === 'stress' ? 'stress' : 'val'} 
                                stroke={currentTab.color} 
                                fill={`url(#grad-${activeTab})`} 
                                strokeWidth={2}
                              />
                            </AreaChart>
                          )}
                        </ResponsiveContainer>
                      </div>

                      <div className="mt-8 space-y-4">
                         <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                            <div className="text-xs text-gray-500 mb-1">Source Analysis</div>
                            <div className="text-xs font-mono text-gray-300">{currentTab.source}</div>
                         </div>
                      </div>
                   </div>

                   {/* Bottom Nav Mock */}
                   <div className="h-12 border-t border-white/10 flex justify-between items-center pt-4 opacity-50">
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                      <div className="w-8 h-8 rounded-full bg-white/10"></div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right: Tabs Selection */}
          <div className="space-y-4">
             {TABS.map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={`w-full text-left p-6 rounded-lg border transition-all duration-300 group ${
                   activeTab === tab.id 
                   ? 'bg-white/10 border-tech/50 shadow-[0_0_15px_rgba(0,0,0,0.5)]' 
                   : 'bg-transparent border-white/5 hover:bg-white/5'
                 }`}
               >
                 <div className="flex items-start justify-between">
                   <div className="flex items-center mb-2">
                     <tab.icon 
                        size={20} 
                        className={`mr-3 ${activeTab === tab.id ? 'text-white' : 'text-gray-500'}`} 
                        style={{ color: activeTab === tab.id ? tab.color : undefined }}
                     />
                     <h3 className={`font-bold ${activeTab === tab.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                       {tab.label}
                     </h3>
                   </div>
                   {activeTab === tab.id && <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: tab.color}}></div>}
                 </div>
                 
                 <div className={`overflow-hidden transition-all duration-300 ${activeTab === tab.id ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-gray-300 font-body mb-3">{tab.description}</p>
                    <div className="inline-flex items-center text-xs font-mono text-gray-500 border border-gray-700 px-2 py-1 rounded">
                       SRC: {tab.source}
                    </div>
                 </div>
               </button>
             ))}
          </div>

        </div>
      </section>

      {/* Control Center & Contact Management */}
      <section className="py-20 bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Control Center</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The App is the sole tool for exercising control over sharing functionality and permission management, essential for security and privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contact Management Info */}
            <div className="space-y-8">
              <div className="bg-[#050505] p-8 rounded-xl border border-white/10 hover:border-tech/30 transition-colors">
                <div className="flex items-center mb-4">
                  <Users className="text-tech mr-3" />
                  <h3 className="text-xl font-bold">Contact Configuration</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  The App allows you to manage contact permissions to define who belongs to your <strong className="text-white">Trusted Circle</strong> (Consumer Edition) or your <strong className="text-white">Operational Team</strong> (Tactical Edition).
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-consumer/20 text-consumer text-xs font-bold rounded">Trusted Circle</span>
                  <span className="px-3 py-1 bg-tactical/20 text-tactical text-xs font-bold rounded">Squad Mesh</span>
                </div>
              </div>

              <div className="bg-[#050505] p-8 rounded-xl border border-white/10 hover:border-tech/30 transition-colors">
                <div className="flex items-center mb-4">
                  <WifiOff className="text-tech mr-3" />
                  <h3 className="text-xl font-bold">Critical Offline Operation</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  While the App configures the permissions, the actual <strong className="text-white">Ring-to-Ring</strong> exchange happens offline. Signals are transmitted via <span className="text-tech">1-3 byte encrypted packets</span> without internet connection.
                </p>
              </div>
            </div>

            {/* Offline Diagram Visualization */}
            <div className="flex justify-center items-center p-12 bg-black border border-white/10 rounded-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-32 bg-tech/5 rounded-full blur-3xl pointer-events-none"></div>
               <div className="relative w-full max-w-md h-40">
                  {/* Rings */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-gray-700 bg-[#111] flex items-center justify-center z-10 shadow-lg">
                    <span className="text-xs font-bold text-gray-400">USER A</span>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-gray-700 bg-[#111] flex items-center justify-center z-10 shadow-lg">
                    <span className="text-xs font-bold text-gray-400">USER B</span>
                  </div>
                  
                  {/* Connection Line */}
                  <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-gray-800"></div>
                  
                  {/* Packet Animation */}
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-tech rounded-full shadow-[0_0_15px_#00FFFF] animate-ping-slow z-20"></div>
                  
                  {/* Label */}
                  <div className="absolute top-0 w-full text-center">
                    <div className="inline-block bg-tech/10 border border-tech text-tech text-[10px] font-mono px-2 py-1 rounded mb-2">
                      ENCRYPTED PACKET [1-3 BYTES]
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full text-center text-xs text-gray-500 font-mono">
                    STATUS: OFFLINE // SECURE
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Privacy & TinyML Section */}
      <section className="py-20 px-4 bg-primary border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Data Privacy Promise</h2>
              <div className="space-y-6">
                <p className="text-gray-400 font-body leading-relaxed">
                  Given the sensitive nature of biometric data and emotional signals, the App acts as a guarantor of confidentiality. It is the transparent window into our rigorous security architecture.
                </p>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Cpu size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Local TinyML Inference</h4>
                    <p className="text-sm text-gray-500">
                      Emotional inference occurs <strong className="text-gray-300">locally on the device</strong>. The App relies on the TinyML processor architecture for Offline AI, ensuring no raw data processing happens in the cloud.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Eye size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Confidentiality Guarantee</h4>
                    <p className="text-sm text-gray-500">
                      It is crucial to highlight that <strong className="text-gray-300">no personal data leaves the device</strong>. The App displays only the analysis results (like Stress Readiness or Emotional Map), while raw biometric data remains strictly private.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Visualization */}
            <div className="bg-[#080808] border border-white/5 p-8 rounded-2xl">
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <span className="text-sm font-mono text-gray-400">DATA FLOW DIAGRAM</span>
                <Lock size={16} className="text-tech" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded">
                  <span className="text-sm text-gray-300">Raw Bio-Signals</span>
                  <span className="text-xs text-red-400 font-mono">[LOCKED IN HARDWARE]</span>
                </div>
                <div className="flex justify-center">
                  <div className="h-6 w-[2px] bg-gray-700"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-tech/10 border border-tech/20 rounded">
                  <span className="text-sm text-white font-bold">TinyML Processor</span>
                  <span className="text-xs text-tech font-mono">PROCESSING...</span>
                </div>
                 <div className="flex justify-center">
                  <div className="h-6 w-[2px] bg-gray-700"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded">
                  <span className="text-sm text-gray-300">App Display</span>
                  <span className="text-xs text-green-400 font-mono">[INSIGHTS ONLY]</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Edition Capabilities Summary */}
      <section className="bg-white/5 py-24 border-t border-white/10">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Edition Capabilities Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* Consumer */}
               <div className="p-8 rounded-xl bg-black border border-consumer/20 hover:border-consumer transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-consumer font-bold uppercase tracking-widest text-sm">Consumer Edition</div>
                    <Heart className="text-consumer group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Wellness & Lifestyle</h3>
                  <div className="space-y-4 text-sm text-gray-400 font-body">
                    <p>
                      <strong className="text-white">Managed Features:</strong> <br/>
                      DUBO™ (Dynamic Wellness Optimization) and Trusted Circle Status Sharing configuration.
                    </p>
                    <div className="h-[1px] bg-white/10 w-full my-4"></div>
                    <p>
                      <strong className="text-white">Primary Goal:</strong> <br/>
                      Maximize daily balance and connect with loved ones through empathy.
                    </p>
                  </div>
               </div>

               {/* Tactical */}
               <div className="p-8 rounded-xl bg-black border border-tactical/20 hover:border-tactical transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-tactical font-bold uppercase tracking-widest text-sm">Tactical Edition</div>
                    <Network className="text-tactical group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Ops & Performance</h3>
                  <div className="space-y-4 text-sm text-gray-400 font-body">
                    <p>
                      <strong className="text-white">Managed Features:</strong> <br/>
                      CBRN Threat-Awareness Sensor data visualization and Squad Mesh Networking interface.
                    </p>
                    <div className="h-[1px] bg-white/10 w-full my-4"></div>
                    <p>
                      <strong className="text-white">Connectivity Specs:</strong> <br/>
                      Utilizes <span className="text-tactical">Sub-GHz radio</span> (433/868/915 MHz) to penetrate walls and structures. Supports multi-hop expansion (e.g., 10 rings → over 10 km coverage).
                    </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

    </div>
  );
};