import React from 'react';

const Features: React.FC = () => {
  const features = [
    { title: "Agenda Online Inteligente", desc: "Reduce el ausentismo con recordatorios automáticos enviados directamente al celular del paciente.", icon: "📆" },
    { title: "Ficha Clínica & Odontograma", desc: "Historial completo, evolución gráfica de tratamientos e informes visados listos para auditorías.", icon: "🦷" },
    { title: "Caja y Liquidaciones", desc: "Controla abonos, medios de pago (Transbank, transferencias) y liquida las comisiones de tus profesionales sin errores.", icon: "💵" },
    { title: "Reportes de Rendimiento", desc: "Gráficos limpios de rentabilidad por box, tratamientos más solicitados y productividad mensual.", icon: "📈" },
    { title: "Soporte Multi-Profesional", desc: "Ideal tanto para consultas individuales como para clínicas medianas con múltiples odontólogos trabajando en paralelo.", icon: "👥" },
    { title: "Portal de Auto-Agendamiento", desc: "Permite que tus pacientes agenden sus horas disponibles 24/7 desde un link simple sin llamarte.", icon: "🌐" },
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-slate-50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-2">Funcionalidades Core</h2>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Todo lo que necesitas bajo un concepto modular y ordenado
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-slate-100 shadow-xs hover:border-teal-600/30 transition-all group">
              <div className="text-2xl mb-3 w-10 h-10 bg-slate-50 group-hover:bg-teal-50 rounded-lg flex items-center justify-center transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">{feat.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-800 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg border border-teal-700/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30 uppercase tracking-wide">Exclusivo de BoxManager</span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Tu clínica con identidad web propia</h3>
            <p className="text-sm text-slate-300">
              Incluimos en todos nuestros planes un subdominio personalizado de venta (ej: <span className="font-mono text-white bg-slate-800/60 px-1 py-0.5 rounded">tuclinica.boxmanager.cl</span>) completamente autogestionable para que tus pacientes reserven de forma directa.
            </p>
          </div>
          <div className="text-xs bg-white/10 border border-white/10 rounded-xl p-4 font-mono text-teal-200 shadow-inner w-full md:w-auto text-center">
            ✨ Incluido sin costos adicionales
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
