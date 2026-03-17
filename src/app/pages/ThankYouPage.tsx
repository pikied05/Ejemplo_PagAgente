import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Calendar, Download, Clock } from "lucide-react";
import { Footer } from "../components/Footer";
import { jsPDF } from "jspdf";

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  smokes: string;
  preDiagnosis: string;
  budget: string;
  priority: string;
}

export function ThankYouPage() {
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('leadFormData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Página 1: Portada y Promesa
    doc.setFillColor(0, 82, 204);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text("Ruta MetLife 2026", 105, 100, { align: "center" });
    doc.setFontSize(16);
    doc.text("Cómo blindar tu salud y patrimonio", 105, 120, { align: "center" });
    doc.text("en México sin pagar de más", 105, 130, { align: "center" });
    doc.setFontSize(12);
    doc.setTextColor(230, 230, 230);
    doc.text("Felicidades. Has dado el primer paso para dejar de preocuparte", 105, 180, { align: "center" });
    doc.text("por el '¿qué pasaría si...?'. En esta guía entenderás cómo", 105, 190, { align: "center" });
    doc.text("funcionan los seguros líderes en México y cómo elegir el tuyo.", 105, 200, { align: "center" });

    // Página 2: ¿Por qué MetLife?
    doc.addPage();
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, 210, 297, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(20);
    doc.text("¿Por qué MetLife?", 20, 30);
    doc.setFontSize(12);
    doc.text("El Respaldo que necesitas", 20, 45);
    doc.setFontSize(11);
    doc.text("• Solidez: Más de 90 años en México y 150 a nivel mundial", 20, 65);
    doc.text("• Red Médica: Acceso a los mejores hospitales del país", 20, 80);
    doc.text("  (desde niveles básicos hasta Médica Sur o ABC)", 20, 90);
    doc.text("• Flexibilidad: No es un 'talla única'. Puedes empezar con", 20, 105);
    doc.text("  algo básico e ir creciendo conforme tus necesidades", 20, 115);

    // Página 3: Gastos Médicos Mayores
    doc.addPage();
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(20);
    doc.text("Gastos Médicos Mayores (MédicaLife)", 20, 30);
    doc.setFontSize(11);
    doc.text("Beneficios estrella de MetLife:", 20, 50);
    doc.text("• Asistencia 24/7: Orientación médica telefónica y ambulancias", 20, 65);
    doc.text("• Case Management: Acompañamiento personalizado en", 20, 80);
    doc.text("  enfermedades graves para que no te pierdas en el papeleo", 20, 90);
    doc.text("• Dental y Visión: Beneficios adicionales que muchos olvidan usar", 20, 105);
    doc.setFontSize(10);
    doc.setTextColor(255, 140, 0);
    doc.text("💡 Tip de ahorro: Elegir un deducible de $30,000 MXN en lugar de", 20, 125);
    doc.text("$15,000 MXN puede bajar tu mensualidad hasta un 25%", 20, 135);

    // Página 4: Vida y Ahorro
    doc.addPage();
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(20);
    doc.text("Vida y Ahorro (Met99 y FlexiLife)", 20, 30);
    doc.setFontSize(11);
    doc.text("No es solo para cuando 'ya no estés':", 20, 50);
    doc.text("• Met99: El seguro más famoso de México por su facilidad de pago", 20, 65);
    doc.text("  y coberturas por diagnóstico (dinero en efectivo al detectar una", 20, 75);
    doc.text("  enfermedad grave para que lo uses en lo que quieras)", 20, 85);
    doc.text("• FlexiLife: Ideal para metas a mediano plazo (educación, casa)", 20, 100);
    doc.text("  con la ventaja de estar protegido y ahorro con rendimientos", 20, 110);
    doc.text("  basados en CETES", 20, 120);

    // Página 5: El Semáforo de Calificación
    doc.addPage();
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(20);
    doc.text("El Semáforo de Calificación", 20, 30);
    doc.setFontSize(11);
    doc.text("Tu perfil personalizado:", 20, 50);
    doc.text("Perfil A (Sano / Presupuesto +$3,000 MXN):", 20, 65);
    doc.text("  → MédicaLife Familiar con cobertura nacional total", 20, 75);
    doc.text("Perfil B (Joven / Presupuesto -$1,500 MXN):", 20, 95);
    doc.text("  → Seguro Básico Estandarizado o Met99 para empezar", 20, 105);
    doc.text("Perfil C (Preexistencias):", 20, 125);
    doc.text("  → Necesitas asesoría personalizada para evaluar la", 20, 135);
    doc.text("     suscripción y evitar rechazos", 20, 145);

    // Página 6: Próximos Pasos
    doc.addPage();
    doc.setFillColor(0, 82, 204);
    doc.rect(0, 0, 210, 80, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text("Próximos Pasos", 105, 40, { align: "center" });
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text("Tener el PDF es información; tener la póliza es tranquilidad.", 105, 100, { align: "center" });
    doc.text("Basado en tus respuestas del formulario, ya tengo un borrador", 105, 115, { align: "center" });
    doc.text("de lo que podría ser tu plan ideal.", 105, 125, { align: "center" });
    doc.setFontSize(14);
    doc.setTextColor(255, 140, 0);
    doc.text("📞 Agenda tu diagnóstico gratuito de 10 minutos", 105, 150, { align: "center" });
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    if (formData?.whatsapp) {
      doc.text(`WhatsApp: ${formData.whatsapp}`, 105, 170, { align: "center" });
    }

    doc.save("Ruta-MetLife-2026.pdf");
  };

  // Calendly-like time slots
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM"
  ];

  const nextDays = [
    "Lunes 1 de Marzo",
    "Martes 2 de Marzo",
    "Miércoles 3 de Marzo"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Success Message */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¡Tu guía va en camino{formData?.name ? `, ${formData.name.split(' ')[0]}` : ''}!
          </h1>
          
          <p className="text-xl text-gray-600 mb-2">
            Revisa tu correo electrónico {formData?.email && (
              <span className="font-semibold text-blue-600">({formData.email})</span>
            )}
          </p>
          
          <p className="text-gray-500">
            Si no lo ves en tu bandeja principal, revisa la carpeta de spam o promociones.
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <button 
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <Download className="w-6 h-6" />
            Descargar Guía Ahora (PDF)
          </button>
        </motion.div>

        {/* Separator */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-6 py-2 text-gray-600 font-medium rounded-full border border-gray-300">
              O mejor aún...
            </span>
          </div>
        </div>

        {/* Call to Action for Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-3">
              ¿Prefieres ahorrarte la lectura?
            </h2>
            <p className="text-xl text-orange-50">
              Agenda una breve llamada de diagnóstico y yo haré los cálculos por ti en 10 minutos
            </p>
          </div>

          <div className="p-8">
            {/* Benefits of booking */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Solo 10 minutos</h3>
                <p className="text-sm text-gray-600">Llamada breve y al punto</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Sin compromiso</h3>
                <p className="text-sm text-gray-600">Asesoría gratuita</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-3">
                  <Download className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Cotización exacta</h3>
                <p className="text-sm text-gray-600">Basada en tu perfil</p>
              </div>
            </div>

            {/* Mock Calendar */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                Selecciona fecha y hora:
              </h3>

              {nextDays.map((day, dayIndex) => (
                <div key={day} className="border border-gray-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">{day}</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={`${dayIndex}-${time}`}
                        className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-gray-700 hover:text-blue-700 font-medium"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Al agendar, recibirás un recordatorio por email y WhatsApp
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            ¿Prefieres seguir explorando por tu cuenta?{" "}
            <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">
              Volver al inicio
            </a>
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}