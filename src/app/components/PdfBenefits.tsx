import { FileText, Award, HeartPulse, Calculator } from "lucide-react";

export function PdfBenefits() {
  const benefits = [
    {
      icon: Award,
      title: "La verdad sobre MetLife y su red médica",
      description: "Descubre por qué es la aseguradora más confiable y cómo acceder a los mejores hospitales del país."
    },
    {
      icon: HeartPulse,
      title: "Gastos Médicos vs. Seguro de Vida: ¿Cuál necesitas?",
      description: "Entiende las diferencias clave y cuál se adapta mejor a tu situación familiar y financiera actual."
    },
    {
      icon: Calculator,
      title: "El Semáforo de Calificación personalizado",
      description: "Según tu perfil, descubre exactamente qué plan de MetLife es ideal para ti sin pagar de más."
    }
  ];

  return (
    <section id="beneficios" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Descarga tu Guía Gratuita 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            "Ruta MetLife 2026: Cómo blindar tu salud y patrimonio en México sin pagar de más"
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-lg mb-6">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-orange-200">
          <p className="text-lg text-gray-700 font-semibold">
            ✨ Incluye tu plan personalizado basado en tus respuestas del formulario
          </p>
        </div>
      </div>
    </section>
  );
}