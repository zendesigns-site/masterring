import React from 'react';
import { Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">SMART<span className="text-tech">RING</span></h3>
            <p className="text-gray-400 text-sm max-w-md font-body">
              One Ring. Two Worlds. The ultimate wearable for precision in life and performance.
              Featuring local TinyML processing for absolute data privacy.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-body">
              <li><a href="#" className="hover:text-tech transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-tech transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-tech transition">Data Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-body">
              <li><a href="#" className="hover:text-tech transition">FAQ</a></li>
              <li><a href="#" className="hover:text-tech transition">Contact Center</a></li>
              <li><Link to="/investors" className="hover:text-tech transition">Investor Relations</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-600 font-body">
            &copy; 2024 Smart Ring Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0 text-gray-500 text-xs">
            <span className="flex items-center"><Shield size={12} className="mr-1" /> MIL-STD-810H Certified</span>
            <span className="flex items-center"><Lock size={12} className="mr-1" /> On-Device Encryption</span>
          </div>
        </div>
      </div>
    </footer>
  );
};