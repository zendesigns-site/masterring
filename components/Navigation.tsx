
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Luxury', path: '/luxury' },
    { name: 'Consumer', path: '/consumer' },
    { name: 'Tactical', path: '/tactical' },
    { name: 'Technology', path: '/technology' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Palette Assets', path: '/palette-assets' },
  ];

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    const isLuxury = path === '/luxury';
    
    let base = "text-[10px] font-bold tracking-[0.15em] transition-colors duration-300 ";
    if (isLuxury) {
        base += "hover:text-consumerGold text-consumerGold/80 ";
    } else {
        base += "hover:text-tech text-gray-400 ";
    }
    
    return isActive ? `${base} text-white underline underline-offset-8 decoration-2` : base;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/95 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold tracking-tighter text-white">
              ORBYX<span className="text-tech">™</span>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className={getLinkClass(link.path)}>
                  {link.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary/98 border-b border-white/5 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 rounded-md text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
