
import React from 'react';
import { Palette, Info, Layout, CheckCircle, Type, AlignLeft, Smartphone, Monitor, Maximize } from 'lucide-react';

const COLORS = [
  {
    name: "Consumer Mint",
    hex: "#00C896",
    tailwind: "text-consumer / bg-consumer",
    usage: "Consumer Edition Page, Wellness Metrics, DUBO™ Engine, Recovery Charts.",
    description: "Symbolizes health, vitality, and optimized lifestyle balance."
  },
  {
    name: "Tactical Red",
    hex: "#A52A2A",
    tailwind: "text-tactical / bg-tactical",
    usage: "Tactical Edition Page, Mission-Critical Alerts, HUD Visualizations, Operational Specs.",
    description: "Symbolizes urgency, resilience, and high-performance durability."
  },
  {
    name: "Tech Cyan",
    hex: "#00FFFF",
    tailwind: "text-tech / bg-tech",
    usage: "Technology Page, Architecture Blueprints, Global eSIM Status, System Schematics.",
    description: "Represents the core intelligence and silicon foundation of Orbyx™."
  },
  {
    name: "Luxury Gold",
    hex: "#FFD700",
    tailwind: "text-consumerGold / bg-consumerGold",
    usage: "Luxury Edition Page, Masterpiece Hero, Elite Wellness Icons, Premium CTAs.",
    description: "Exclusive to the Orbyx™ Luxury Edition. Represents prestige and exclusivity."
  },
  {
    name: "Primary Deep",
    hex: "#0A0A0A",
    tailwind: "bg-primary",
    usage: "Global background across all 'Worlds', ensuring high contrast and premium feel.",
    description: "The base of the Orbyx™ universe, minimizing eye strain and maximizing focus."
  }
];

const TYPOGRAPHY_SCALE = [
  {
    tag: "H1 / Hero",
    font: "Montserrat",
    weight: "800",
    twClass: "text-5xl to text-9xl",
    rem: "3rem - 8rem",
    tracking: "-0.05em",
    sample: "ORBYX™ PRECISION"
  },
  {
    tag: "H2 / Section",
    font: "Montserrat",
    weight: "700",
    twClass: "text-4xl",
    rem: "2.25rem",
    tracking: "-0.025em",
    sample: "Master Arrangement"
  },
  {
    tag: "H3 / Subsection",
    font: "Montserrat",
    weight: "600",
    twClass: "text-2xl",
    rem: "1.5rem",
    tracking: "normal",
    sample: "Bio-Sensing Core"
  },
  {
    tag: "Lead Paragraph",
    font: "Inter",
    weight: "300",
    twClass: "text-xl",
    rem: "1.25rem",
    tracking: "relaxed",
    sample: "A radical departure from standard wearables."
  },
  {
    tag: "Body Text",
    font: "Inter",
    weight: "400",
    twClass: "text-sm",
    rem: "0.875rem",
    tracking: "relaxed",
    sample: "The essential operational tool for elite safety."
  },
  {
    tag: "Technical Mono",
    font: "Montserrat",
    weight: "600",
    twClass: "text-[10px]",
    rem: "0.625rem",
    tracking: "0.4em",
    sample: "OPS_STATUS: OPTIMAL_V2.0"
  }
];

export const PaletteAssets: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-primary text-gray-200 font-sans pb-32">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-4 text-tech">
            <Palette size={32} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Design System Assets</h1>
          </div>
          <p className="text-xl text-gray-500 max-w-3xl font-body leading-relaxed">
            Documentazione tecnica dei componenti visivi Orbyx™. Utilizziamo esclusivamente unità <strong>REM</strong> per garantire una scalabilità coerente e accessibile in tutto l'ecosistema.
          </p>
        </div>

        {/* 1. COLOR PALETTE */}
        <div className="mb-32">
          <h2 className="text-2xl font-bold mb-12 flex items-center border-b border-white/10 pb-4 uppercase tracking-widest">
            <Palette size={24} className="mr-3 text-consumer" />
            01. Chromatic Language
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COLORS.map((asset, i) => (
              <div key={i} className="group bg-[#0f0f0f] border border-white/5 rounded-xl overflow-hidden hover:border-white/20 transition-all shadow-2xl">
                <div className="h-40 w-full transition-transform duration-700 group-hover:scale-105" style={{ backgroundColor: asset.hex }}>
                  <div className="h-full w-full bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                    <span className="text-white font-mono font-bold text-2xl tracking-tighter drop-shadow-lg uppercase">{asset.hex}</span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{asset.name}</h3>
                    <code className="text-[10px] text-tech font-mono uppercase tracking-widest">{asset.tailwind}</code>
                  </div>
                  <p className="text-xs text-gray-400 font-body leading-relaxed">{asset.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. TYPOGRAPHY SYSTEM */}
        <div className="mb-32">
          <h2 className="text-2xl font-bold mb-12 flex items-center border-b border-white/10 pb-4 uppercase tracking-widest">
            <Type size={24} className="mr-3 text-tech" />
            02. Typography & Scalable Dimensions
          </h2>

          {/* Unit Explanation Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 p-6 border border-white/10 rounded-lg">
              <div className="flex items-center text-tech mb-3">
                <Maximize size={18} className="mr-2" />
                <span className="font-mono text-xs uppercase tracking-widest">Pure REM Logic</span>
              </div>
              <h4 className="text-white font-bold mb-2">Sovereign Scaling</h4>
              <p className="text-xs text-gray-500 font-body leading-relaxed">
                Rifiutiamo i pixel fissi per favorire i <strong>rem</strong>. Questo assicura che il testo Orbyx™ rispetti le gerarchie visive indipendentemente dalla densità di pixel dello schermo.
              </p>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 rounded-lg">
              <div className="flex items-center text-consumer mb-3">
                <Smartphone size={18} className="mr-2" />
                <span className="font-mono text-xs uppercase tracking-widest">Adaptive Viewport</span>
              </div>
              <h4 className="text-white font-bold mb-2">Dynamic Range</h4>
              <p className="text-xs text-gray-500 font-body leading-relaxed">
                Le dimensioni dei testi sono progettate per fluttuare tra i breakpoint. L'H1 sfrutta classi responsive per occupare lo spazio necessario senza collisioni.
              </p>
            </div>
            <div className="bg-white/5 p-6 border border-white/10 rounded-lg">
              <div className="flex items-center text-tactical mb-3">
                <AlignLeft size={18} className="mr-2" />
                <span className="font-mono text-xs uppercase tracking-widest">Haptic Typography</span>
              </div>
              <h4 className="text-white font-bold mb-2">Logical Spacing</h4>
              <p className="text-xs text-gray-500 font-body leading-relaxed">
                Ogni dimensione è accoppiata a un valore di <strong>tracking</strong> specifico, ottimizzando la velocità di lettura tecnica e l'impatto del brand.
              </p>
            </div>
          </div>

          {/* Type Specimen Table */}
          <div className="bg-[#0f0f0f] border border-white/5 rounded-xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5">
                  <tr className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    <th className="p-6">Element & Class</th>
                    <th className="p-6">Dimensions (REM)</th>
                    <th className="p-6">Preview & Scale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-body">
                  {TYPOGRAPHY_SCALE.map((type, i) => (
                    <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                      <td className="p-6">
                        <div className="text-white font-bold mb-1">{type.tag}</div>
                        <code className="text-[10px] text-tech font-mono">{type.twClass}</code>
                      </td>
                      <td className="p-6 text-sm font-mono text-gray-400">
                        <span className="bg-white/5 px-2 py-1 rounded border border-white/10">{type.rem}</span>
                      </td>
                      <td className="p-6">
                        <p className={`whitespace-nowrap ${type.font === 'Inter' ? 'font-body' : 'font-sans'} text-white font-bold`} style={{ fontSize: type.rem.split(' - ')[0], letterSpacing: type.tracking }}>
                          {type.sample}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 3. BREAKPOINT REFERENCE */}
        <div className="mb-32">
          <h2 className="text-2xl font-bold mb-12 flex items-center border-b border-white/10 pb-4 uppercase tracking-widest">
            <Monitor size={24} className="mr-3 text-tech" />
            03. Responsive Breakpoints
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             {[
               { bp: "sm", val: "40rem", context: "Mobile Landscape" },
               { bp: "md", val: "48rem", context: "Tablets" },
               { bp: "lg", val: "64rem", context: "Laptops" },
               { bp: "xl", val: "80rem", context: "Desktop Ultra" }
             ].map((item, i) => (
               <div key={i} className="p-6 bg-white/5 border border-white/10 rounded flex flex-col items-center">
                  <span className="text-tech font-mono font-bold mb-1">{item.bp.toUpperCase()}</span>
                  <span className="text-white text-xl font-bold mb-2">{item.val}</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">{item.context}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Final Sign-off */}
        <div className="mt-24 text-center">
           <div className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-500">
             <CheckCircle size={14} className="mr-3 text-tech" />
             ORBYX™ DESIGN REPOSITORY V1.3 // REM DIMENSIONS ONLY
           </div>
        </div>

      </div>
    </div>
  );
};
