import React from 'react';
import ContactForm from './ContactForm';

const DemoPage: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50 min-h-[70vh] flex flex-col justify-center animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Estás a un paso del orden absoluto</h1>
          <p className="text-sm text-slate-600">
            Completa tus antecedentes básicos. Configurar tu espacio de pruebas de <strong>BoxManager</strong> toma menos de 5 minutos.
          </p>
        </div>

        <ContactForm isStandalone={true} />
        
        <div className="mt-8 text-center text-xs text-slate-400 max-w-md mx-auto">
          🔒 Tus datos se encuentran protegidos bajo estrictos protocolos de confidencialidad B2B por BoxManager SpA. No compartimos tu información con terceros.
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
