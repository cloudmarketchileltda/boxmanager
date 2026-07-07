import React, { useState } from 'react';
import type { FormEvent } from 'react';

interface ContactFormProps {
  isStandalone?: boolean;
}

interface FormState {
  nombre: string;
  clinica: string;
  telefono: string;
  email: string;
  profesionales: string;
  mensaje: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ isStandalone = false }) => {
  const [formData, setFormData] = useState<FormState>({
    nombre: '',
    clinica: '',
    telefono: '',
    email: '',
    profesionales: '1',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.nombre || !formData.clinica || !formData.telefono || !formData.email) {
      setError('Por favor, completa todos los campos requeridos (*).');
      return;
    }

    if (!/^\+?56\d{9}$|^\d{9}$/.test(formData.telefono.replace(/\s/g, ''))) {
      setError('Por favor, ingresa un número de teléfono chileno válido (9 dígitos o con +56).');
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-emerald-200 max-w-xl mx-auto text-center space-y-4 shadow-sm my-12 animate-fadeIn">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-xl font-bold text-slate-900">¡Solicitud recibida con éxito!</h3>
        <p className="text-sm text-slate-600 max-w-sm mx-auto">
          Hemos guardado tus datos de contacto para **{formData.clinica}**. Un especialista dental de **BoxManager SpA** te contactará vía WhatsApp o llamada telefónica dentro de las próximas 24 horas hábiles para coordinar tu Demo.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({ nombre: '', clinica: '', telefono: '', email: '', profesionales: '1', mensaje: '' });
          }}
          className="text-xs text-teal-700 font-semibold underline hover:text-teal-900 cursor-pointer bg-transparent border-none"
        >
          Enviar otro formulario
        </button>
      </div>
    );
  }

  return (
    <section id="contacto" className={`scroll-mt-12 ${isStandalone ? 'py-4' : 'py-20 bg-slate-50'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {!isStandalone && (
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-700 mb-2">Da el paso hoy</h2>
            <p className="text-2xl font-extrabold text-slate-900">Agenda tu demostración sin costo</p>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-rose-50 text-rose-800 rounded-lg text-xs font-medium border border-rose-100">
                ⚠ {error}
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={e => setFormData({...formData, nombre: e.target.value})}
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:bg-white focus:border-teal-700 focus:outline-none transition-colors"
                  placeholder="Ej: Dr. Francisco Silva"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nombre de la Clínica / Consulta *</label>
                <input
                  type="text"
                  required
                  value={formData.clinica}
                  onChange={e => setFormData({...formData, clinica: e.target.value})}
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:bg-white focus:border-teal-700 focus:outline-none transition-colors"
                  placeholder="Ej: Clínica Dental San Damián"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Teléfono de Contacto *</label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={e => setFormData({...formData, telefono: e.target.value})}
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:bg-white focus:border-teal-700 focus:outline-none transition-colors"
                  placeholder="Ej: 912345678"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Correo Electrónico Corporativo *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:bg-white focus:border-teal-700 focus:outline-none transition-colors"
                  placeholder="contacto@tuclinica.cl"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Número de Profesionales / Dentistas</label>
              <select
                value={formData.profesionales}
                onChange={e => setFormData({...formData, profesionales: e.target.value})}
                className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:bg-white focus:border-teal-700 focus:outline-none transition-colors"
              >
                <option value="1">Solo yo (Consulta Particular)</option>
                <option value="2-5">De 2 a 5 profesionales</option>
                <option value="6-10">De 6 a 10 profesionales</option>
                <option value="more">Más de 10 profesionales (Red)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Mensaje o Requerimiento Especial (Opcional)</label>
              <textarea
                rows={3}
                value={formData.mensaje}
                onChange={e => setFormData({...formData, mensaje: e.target.value})}
                className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:bg-white focus:border-teal-700 focus:outline-none transition-colors resize-none"
                placeholder="Cuéntanos brevemente si usas algún software actualmente o tus mayores trancas operativas..."
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg text-sm shadow-md hover:shadow transition-all active:scale-98 cursor-pointer"
              >
                Solicitar Mi Demo Gratis
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
