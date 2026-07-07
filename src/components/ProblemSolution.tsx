import React from 'react';

const ProblemSolution: React.FC = () => {
  const points = [
    {
      problem: "Agendas caóticas y sobrecupos",
      solution: "Visualización limpia por boxes y profesionales con recordatorios automáticos de asistencia vía WhatsApp y SMS.",
      icon: "📅"
    },
    {
      problem: "Fichas de papel o archivos perdidos",
      solution: "Ficha clínica digital unificada, odontograma gráfico e historial de presupuestos a un solo clic de distancia.",
      icon: "🦷"
    },
    {
      problem: "Cuentas que no cuadran a fin de mes",
      solution: "Control estricto de flujos de caja, abonos de pacientes, liquidaciones de dentistas y cálculo de comisiones automatizado.",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-2">El Desafío de Gestionar</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ¿Pasas más tiempo ordenando papeles que atendiendo en el sillón dental?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4 bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-xs border border-slate-100">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="text-rose-500 text-sm">✕</span> {point.problem}
              </h3>
              <p className="text-sm text-slate-500 mb-4 pb-4 border-b border-slate-200/60">
                Un dolor de cabeza recurrente que desgasta a tu secretaria y afecta tus ingresos.
              </p>
              <h4 className="text-sm font-bold text-teal-900 mb-1 flex items-center gap-2">
                <span className="text-emerald-500 text-sm">✓</span> Solución BoxManager:
              </h4>
              <p className="text-sm text-slate-600">
                {point.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
