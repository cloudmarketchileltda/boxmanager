import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    { num: "01", title: "Solicita tu demo", desc: "Completa el formulario web y un asesor especialista agendará una videollamada personalizada de 15 minutos." },
    { num: "02", title: "Configuramos tu entorno", desc: "Damos de alta tu clínica en la plataforma y habilitamos tu subdominio personalizado listo para usar." },
    { num: "03", title: "Capacitamos a tu equipo", desc: "Sesión corta guiada para ti, tus odontólogos y tu personal de recepción. Cero complicaciones." },
    { num: "04", title: "Atiende con total orden", desc: "Comienzas a operar con control absoluto de tus boxes, fichas clínicas seguras y reportería al día." },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-2">Simplicidad desde el día uno</h2>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
            ¿Cómo empezar con BoxManager?
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group space-y-3">
              {idx < 3 && (
                <div className="hidden lg:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-100 group-hover:bg-teal-100 transition-colors z-0" />
              )}
              
              <div className="relative z-10 w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-800 flex items-center justify-center font-bold text-lg shadow-2xs group-hover:bg-teal-800 group-hover:text-white transition-all">
                {step.num}
              </div>
              <h3 className="text-base font-bold text-slate-900 pt-1">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
