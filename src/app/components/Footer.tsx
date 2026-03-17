export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-2">
              <p>Email: contacto@tuseguros.com</p>
              <p>WhatsApp: +52 55 1234 5678</p>
              <p>Horario: Lun-Vie 9:00-18:00</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>Seguro de Vida</li>
              <li>Gastos Médicos Mayores</li>
              <li>Seguros de Ahorro</li>
              <li>Seguros para Empresas</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Aviso de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2026 Todos los derechos reservados. Asesoría de Seguros Independiente.</p>
          <p className="mt-2 text-gray-500">
            No somos una aseguradora. Somos asesores independientes certificados.
          </p>
        </div>
      </div>
    </footer>
  );
}
