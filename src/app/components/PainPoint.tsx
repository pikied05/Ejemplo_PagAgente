import { AlertTriangle, CheckCircle } from "lucide-react";

export function PainPoint() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ¿Sabías que el 40% de las pólizas son rechazadas por errores en la solicitud?
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Miles de familias mexicanas pagan seguros que nunca podrán cobrar por desinformación al momento de contratar.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200 max-w-2xl mx-auto mt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
            <h3 className="text-2xl font-bold text-green-700">Con mi asesoría eso no sucede</h3>
          </div>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-green-600">100% de mis clientes</span> han recibido sus coberturas sin problemas. Mi asesoría personalizada asegura que tu solicitud sea correcta desde el día 1.
          </p>
        </div>
      </div>
    </section>
  );
}