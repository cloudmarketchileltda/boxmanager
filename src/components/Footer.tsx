import React from 'react';
import type { Path } from '../App';

interface FooterProps {
  currentPath: Path;
  setCurrentPath: (path: Path) => void;
  onNavigateSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPath, onNavigateSection }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <div className="md:col-span-5 space-y-3">
          <div className="text-white text-base font-bold tracking-tight">
            Box<span className="text-emerald-400 font-medium">Manager</span> SpA
          </div>
          <p className="text-slate-400 max-w-sm leading-relaxed">
            Software de gestión integral para centros y consultas odontológicas independientes en Chile. Optimizando el rendimiento clínico mediante flujos digitales ordenados.
          </p>
          <div className="text-[11px] text-slate-500">
            📍 Operaciones y Servidores Locales — Santiago de Chile
          </div>
        </div>

        <div className="md:col-span-3 space-y-2">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase text-slate-200">Plataforma</h4>
          <ul className="space-y-1.5 font-medium">
            <li><button onClick={() => onNavigateSection('funcionalidades')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none text-slate-400 text-xs p-0 text-left">Funcionalidades</button></li>
            <li><button onClick={() => onNavigateSection('planes')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none text-slate-400 text-xs p-0 text-left">Planes y Precios</button></li>
            <li><button onClick={() => setCurrentPath('/demo')} className="hover:text-white transition-colors cursor-pointer bg-transparent border-none text-slate-400 text-xs p-0 text-left">Solicitar Demo</button></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-2">
          <h4 className="text-white font-bold text-sm tracking-wide uppercase text-slate-200">Legal</h4>
          <ul className="space-y-1.5 text-slate-500">
            <li>Términos y Condiciones del Servicio (SaaS) — Placeholder</li>
            <li>Políticas de Privacidad y Resguardo de Fichas Clínicas</li>
            <li>Convenios con Colegios Odontológicos</li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between text-slate-500 text-[11px] gap-4">
        <div>
          © {year} BoxManager SpA. Todos los derechos reservados. Módulos adaptados a la normativa de salud chilena.
        </div>
        <div className="font-mono">
          Sitio de referencia oficial: <span className="text-slate-400">boxmanager.cl</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
