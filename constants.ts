import { Feature } from './types';
import { Shield, Wifi, Zap, Activity, Radio, Lock } from 'lucide-react';

export const COLORS = {
  primary: '#101010',
  text: '#EEEEEE',
  techAccent: '#00FFFF',
  consumerAccent: '#00C896',
  tacticalAccent: '#A52A2A',
};

// Extracted from PDF Page 1 & 2
export const PILLARS = [
  {
    id: 1,
    title: "360° Curved OLED",
    desc: "< 0.25mm thickness, always-on capability.",
    icon: Activity
  },
  {
    id: 2,
    title: "Global eSIM",
    desc: "24/7 Connectivity independent of smartphone.",
    icon: Wifi
  },
  {
    id: 3,
    title: "Offline AI",
    desc: "TinyML processing. No data leaves the device.",
    icon: Zap
  }
];

export const CONSUMER_FEATURES: Feature[] = [
  { title: "DUBO™", description: "Dynamic Wellness Optimization for lifestyle balance." },
  { title: "Trusted Circle", description: "Secure Status Sharing with loved ones." },
  { title: "IP68+ & Hypoallergenic", description: "Titanium grade comfort for 24/7 wear." }
];

export const TACTICAL_FEATURES: Feature[] = [
  { title: "CBRN Sensor", description: "Threat-Awareness: Chemical, Bio, Radiological, Nuclear." },
  { title: "Squad Mesh", description: "Offline networking 1000m+ range." },
  { title: "MIL-STD-810H", description: "Extreme durability (-30°C to +70°C)." }
];
