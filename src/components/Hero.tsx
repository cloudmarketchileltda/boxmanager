import React from 'react';
import type { Path } from '../App';

interface HeroProps {
  setCurrentPath: (path: Path) => void;
  onNavigateSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPath, onNavigateSection }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-teal-950 text-white py-16 lg:py-24">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-800/50 border border-teal-700/50 rounded-full text-teal-300 text-xs font-semibold tracking-wide uppercase">
              🇨🇱 Diseñado para la realidad odontológica en Chile
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              El sistema que ordena tu consulta dental, para que tú te enfoques en tus pacientes.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
              Agenda web automatizada, fichas clínicas normadas, odontograma dinámico y control de caja. Todo bajo control, en un espacio digital perfectamente administrado.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={() => setCurrentPath('/demo')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3.5 rounded-lg font-bold text-base transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
              >
                Solicitar Demo
              </button>
              <button
                onClick={() => onNavigateSection('funcionalidades')}
                className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3.5 rounded-lg font-semibold text-base transition-colors cursor-pointer"
              >
                Ver funcionalidades
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <div className="bg-slate-900 rounded-xl shadow-2xl border border-slate-800 p-3 sm:p-4 overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 px-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500 block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500 block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 block"></span>
                </div>
                <div className="bg-slate-800/50 text-slate-400 text-xs px-12 py-1 rounded-md border border-slate-700/30">
                  boxmanager.cl/clinica-dental
                </div>
                <div className="w-6"></div>
              </div>

              <div className="grid grid-cols-12 gap-3 text-slate-800 text-xs">
                <div className="col-span-3 space-y-2 hidden sm:block pr-2 border-r border-slate-800/40">
                  <div className="h-6 bg-teal-800/40 rounded border border-teal-700/30 flex items-center px-2 text-teal-300 font-medium">📊 Resumen</div>
                  <div className="h-6 bg-slate-800/40 rounded flex items-center px-2 text-slate-400">📅 Agenda</div>
                  <div className="h-6 bg-slate-800/40 rounded flex items-center px-2 text-slate-400">🦷 Pacientes</div>
                  <div className="h-6 bg-slate-800/40 rounded flex items-center px-2 text-slate-400">💰 Caja Diario</div>
                </div>

                <div className="col-span-12 sm:col-span-9 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-xs">
                      <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Ingresos del Mes</span>
                      <span className="text-base sm:text-lg font-bold text-slate-900">$3.450.000 CLP</span>
                      <span className="text-[10px] text-emerald-600 font-medium block mt-0.5">↑ +14% vs mes anterior</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-xs">
                      <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">Citas de Hoy</span>
                      <span className="text-base sm:text-lg font-bold text-slate-900">8 Confirmadas</span>
                      <span className="text-[10px] text-teal-600 font-medium block mt-0.5">0 cancelaciones hoy</span>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-xs space-y-2">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                      <span className="font-bold text-slate-900">Bloque de Agenda - Hoy</span>
                      <span className="text-[10px] bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full font-medium">Dr. Matías Aravena</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between p-2 bg-emerald-50/70 border-l-4 border-emerald-500 rounded-r">
                        <div>
                          <p className="font-semibold text-slate-900">09:30 - Constanza Silva</p>
                          <p className="text-[10px] text-slate-500">Limpieza + Diagnóstico</p>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 text-[9px] px-1.5 py-0.5 rounded font-medium">Confirmado SMS</span>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-amber-50/70 border-l-4 border-amber-500 rounded-r">
                        <div>
                          <p className="font-semibold text-slate-900">10:30 - Jorge Valdivia</p>
                          <p className="text-[10px] text-slate-500">Endodoncia Molar M1</p>
                        </div>
                        <span className="bg-amber-100 text-amber-800 text-[9px] px-1.5 py-0.5 rounded font-medium">Por Confirmar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
