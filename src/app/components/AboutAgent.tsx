import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function AboutAgent() {
  return (
    <section id="asesor" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-full">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGFkdmlzb3IlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzIyMzIzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Asesor de seguros"
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 w-fit">
                Tu Asesor Certificado
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Soy [Tu Nombre]
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tu Asesor de Seguros Certificado. Mi objetivo es que <strong>entiendas lo que contratas</strong>.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Con más de 10 años de experiencia en el sector asegurador mexicano, 
                he ayudado a cientos de familias a encontrar la protección adecuada sin pagar de más.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Certificado por AMIS (Asociación Mexicana de Instituciones de Seguros)</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Asesoría sin costo ni compromiso</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Acompañamiento en caso de siniestro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}