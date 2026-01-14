import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Consumer', path: '/consumer' },
    { name: 'Tactical', path: '/tactical' },
    { name: 'Technology', path: '/technology' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Investors', path: '/investors' },
  ];

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    const base = "text-sm font-semibold tracking-wider transition-colors duration-300 hover:text-tech";
    return isActive ? `${base} text-tech underline underline-offset-4` : `${base} text-action`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold tracking-tighter text-white">
              SMART<span className="text-tech">RING</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className={getLinkClass(link.path)}>
                  {link.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-primary border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-tech hover:bg-white/5"
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