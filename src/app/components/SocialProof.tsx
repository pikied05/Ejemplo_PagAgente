import { Shield } from "lucide-react";

export function SocialProof() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Respaldado por MetLife
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            La aseguradora más confiable del mundo
          </p>
          <p className="text-green-600 font-semibold flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Asesoría Independiente y Certificada
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-12 shadow-xl border-2 border-blue-100 max-w-md w-full">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-blue-600" />
              <div className="text-5xl font-bold text-blue-600">MetLife</div>
            </div>
            <p className="text-center text-gray-600 text-lg">
              Más de 150 años de experiencia protegiendo familias alrededor del mundo
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-md border border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Familias Protegidas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$120M</div>
              <p className="text-gray-600">En Coberturas Gestionadas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Satisfacción de Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}