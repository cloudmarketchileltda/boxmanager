import React from 'react';
import type { Path } from '../App';

interface PricingProps {
  setCurrentPath: (path: Path) => void;
}

const Pricing: React.FC<PricingProps> = ({ setCurrentPath }) => {
  const tiers = [
    {
      name: "Independiente",
      price: "$45.000",
      desc: "Perfecto para odontólogos que atienden en su propio box privado.",
      features: ["1 Usuario Profesional", "1 Box de Atención", "Agenda & Recordatorios Web", "Ficha Clínica Digital Básica", "Control de Inventario", "Soporte vía Email"],
      popular: false
    },
    {
      name: "Clínica",
      price: "$85.000",
      desc: "Diseñado para centros médicos dentales con profesionales rotativos.",
      features: ["Hasta 5 Profesionales", "Boxes ilimitados", "Módulo de Caja y Transbank", "Odontograma Avanzado", "Control de Inventario", "Subdominio Personalizado propio", "Soporte Prioritario WhatsApp"],
      popular: true
    },
    {
      name: "Red",
      price: "Cotizar",
      desc: "Solución corporativa para clínicas con múltiples sucursales en Chile.",
      features: ["Profesionales ilimitados", "Multisucursal centralizada", "Control de Inventario", "API abierta para integraciones", "Consolidación Tributaria", "Gerente de cuentas dedicado"],
      popular: false
    }
  ];

  return (
    <section id="planes" className="py-20 bg-slate-50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-2">Inversión Transparente</h2>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Planes escalables que crecen con tu consulta
          </p>
          <p className="text-sm text-slate-500 mt-2">Valores mensuales + IVA</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl border transition-all flex flex-col justify-between relative ${
                tier.popular 
                  ? 'border-teal-600 shadow-md md:-translate-y-2 z-10' 
                  : 'border-slate-200 shadow-xs hover:border-slate-300'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-700 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs">
                  Más Elegido
                </span>
              )}

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{tier.desc}</p>
                </div>

                <div className="pb-6 border-b border-slate-100">
                  <span className="text-3xl font-black text-slate-900">{tier.price}</span>
                  {tier.price !== "Cotizar" && <span className="text-sm text-slate-500 font-medium"> CLP /mes</span>}
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-slate-50 rounded-b-2xl border-t border-slate-100">
                <button
                  onClick={() => setCurrentPath('/demo')}
                  className={`w-full text-center py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                    tier.popular
                      ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300'
                  }`}
                >
                  {tier.price === "Cotizar" ? "Contactar Ventas" : "Solicitar Demo"}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
