import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: "Dr. Alejandro Silva", role: "Director Clínico, OdontoCura", loc: "Santiago", text: "Pasamos de planillas Excel colapsadas a tener la agenda completamente coordinada en dos días. Los recordatorios automáticos redujeron el ausentismo casi a cero.", avatar: "👨‍⚕️" },
    { name: "Dra. Marcela Poblete", role: "Ortodoncista Independiente", loc: "Concepción", text: "Lo que más valoro es el control de caja diario. Sé exactamente cuánto ingresó por Transbank y qué tratamientos están pendientes de pago sin enredos.", avatar: "👩‍⚕️" },
    { name: "Dra. Camila Vergara", role: "Fundadora de Clínica DentAll", loc: "Viña del Mar", text: "El hecho de que incluya un subdominio propio para que los pacientes se auto-agenden nos dio un salto de profesionalismo tremendo frente a la competencia.", avatar: "👩‍⚕️" },
  ];

  return (
    <section id="nosotros" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-2">Opiniones de Colegas</h2>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Respaldado por profesionales de la salud dental
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-6 relative flex flex-col justify-between">
              <p className="text-sm text-slate-600 italic leading-relaxed mb-6">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-lg shadow-2xs">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{rev.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{rev.role} — {rev.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
