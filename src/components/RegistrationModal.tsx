import React, { useState, type ReactNode } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  nickname: string;
  terms: boolean;
}

interface RegistrationFields {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  nickname: string;
  terms: string;
  submit: string;
}

interface RegistrationTranslation {
  title: string;
  fields: RegistrationFields;
  success: string;
  error: string;
}

interface RegistrationModalProps {
  children?: ReactNode;
  registration?: RegistrationTranslation;
  onClose?: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ 
  children, 
  registration, 
  onClose 
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    nickname: '',
    terms: false
  });
  const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(null);

  const openModal = (): void => {
    setIsOpen(true);
    setFormStatus(null);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setFormStatus(null);
    if (onClose) onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.age || !formData.terms) {
      setFormStatus('error');
      return;
    }

    try {
      console.log('Form data:', formData);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus('success');
      
      setTimeout(() => {
        closeModal();
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          age: '',
          nickname: '',
          terms: false
        });
      }, 3000);
      
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <>
      <div onClick={openModal} className="cursor-pointer">
        {children || (
          <button
            type="button"
            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-200"
          >
            {registration?.fields?.submit || 'Registrarse'}
          </button>
        )}
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={(e: React.MouseEvent) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full overflow-auto max-w-md max-h-full">
            <div className="relative bg-slate-100 border border-slate-300 rounded-lg shadow-lg p-4 md:p-6">
              <div className="flex items-center justify-between border-b border-slate-300 pb-4 md:pb-5">
                <h3 
                  id="modal-title"
                  className="text-lg font-semibold text-slate-800"
                >
                  {registration?.title || 'Inscripción'}
                </h3>
                <button
                  type="button"
                  className="text-slate-600 bg-transparent hover:bg-slate-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center transition-colors duration-200"
                  onClick={closeModal}
                  aria-label="Cerrar modal"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="pt-4 md:pt-6">
                <div className="mb-4">
                  <label 
                    htmlFor="fullName" 
                    className="block mb-2 text-sm font-medium text-slate-800"
                  >
                    {registration?.fields?.fullName || 'Nombre completo'}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-200"
                    placeholder="John Doe..."
                    required
                    aria-required="true"
                  />
                </div>

                <div className="mb-4">
                  <label 
                    htmlFor="email" 
                    className="block mb-2 text-sm font-medium text-slate-800"
                  >
                    {registration?.fields?.email || 'Correo electrónico'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-200"
                    placeholder="john@email.com..."
                    required
                    aria-required="true"
                  />
                </div>

                <div className="mb-4">
                  <label 
                    htmlFor="phone" 
                    className="block mb-2 text-sm font-medium text-slate-800"
                  >
                    {registration?.fields?.phone || 'Teléfono'}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-200"
                    placeholder="612 345 678..."
                    required
                    aria-required="true"
                  />
                </div>

                <div className="mb-4">
                  <label 
                    htmlFor="age" 
                    className="block mb-2 text-sm font-medium text-slate-800"
                  >
                    {registration?.fields?.age || 'Edad'}
                  </label>
                  <input
                    type="number"
                    id="age"
                    value={formData.age}
                    onChange={handleChange}
                    min="14"
                    max="99"
                    className="bg-white border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-200"
                    placeholder="18..."
                    required
                    aria-required="true"
                  />
                </div>

                <div className="mb-4">
                  <label 
                    htmlFor="nickname" 
                    className="block mb-2 text-sm font-medium text-slate-800"
                  >
                    {registration?.fields?.nickname || 'Nickname en EA FC (opcional)'}
                  </label>
                  <input
                    type="text"
                    id="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    className="bg-white border border-slate-300 text-slate-800 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-colors duration-200"
                    placeholder="johndoefc..."
                    aria-label="Nickname opcional"
                  />
                </div>

                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                      required
                      aria-required="true"
                    />
                  </div>
                  <label 
                    htmlFor="terms" 
                    className="ms-2 text-sm font-medium text-slate-800 cursor-pointer"
                  >
                    {registration?.fields?.terms || 'Acepto las bases del torneo'}
                  </label>
                </div>

                <button
                  type="submit"
                  className="text-white bg-blue-500 hover:bg-blue-600  font-medium rounded-lg text-sm px-5 py-2.5 w-full hover:scale-105 active:bg-blue-700 active:scale-95 mb-3 transition-all duration-200"
                  disabled={formStatus === 'success'}
                >
                  {registration?.fields?.submit || 'Pagar inscripción - 12€'}
                </button>

                {formStatus === 'success' && (
                  <div 
                    className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
                    role="alert"
                    aria-live="polite"
                  >
                    {registration?.success || '¡Inscripción completada! Revisa tu email para confirmación.'}
                  </div>
                )}

                {formStatus === 'error' && (
                  <div 
                    className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
                    role="alert"
                    aria-live="assertive"
                  >
                    {registration?.error || 'Error al procesar la inscripción. Inténtalo de nuevo.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationModal;
