import React, { useState } from 'react';
import type { Path } from '../App';

interface HeaderProps {
  currentPath: Path;
  setCurrentPath: (path: Path) => void;
  onNavigateSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPath, onNavigateSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Funcionalidades', id: 'funcionalidades' },
    { label: 'Planes', id: 'planes' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md border-b border-slate-100 z-50 transition-all">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPath('/')}>
          <div className="w-9 h-9 bg-teal-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm border border-emerald-600/20">
            <span className="grid grid-cols-2 gap-0.5 w-4 h-4">
              <span className="border-b border-r border-white/70"></span>
              <span className="border-b border-white/70 bg-emerald-400 rounded-xs"></span>
              <span className="border-r border-white/70"></span>
              <span className="border-white/70"></span>
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Box<span className="text-emerald-700 font-medium">Manager</span>
            <span className="text-[10px] align-super font-semibold text-slate-400 ml-0.5">SpA</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigateSection(item.id)}
              className="text-sm font-medium text-slate-600 hover:text-teal-800 transition-colors cursor-pointer bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <button
            onClick={() => setCurrentPath('/demo')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-98 cursor-pointer"
          >
            Solicitar Demo Gratis
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 bg-transparent border-none"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg absolute w-full left-0 animate-fadeIn">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setIsOpen(false);
                onNavigateSection(item.id);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-800 bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-slate-100 px-3">
            <button
              onClick={() => {
                setIsOpen(false);
                setCurrentPath('/demo');
              }}
              className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
            >
              Solicitar Demo Gratis
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
