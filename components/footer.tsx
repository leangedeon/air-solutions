import Link from 'next/link'
import { Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <img
              src="/logo.svg"
              alt="Air Solutions"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-[#8b949e] leading-relaxed max-w-md">
              Lider en alquiler de compresores de aire industriales. +20 años de experiencia en el rubro brindando soluciones integrales, confiables y eficientes para la industria argentina.
            </p>
            <a
              href="tel:+5491151756162"
              className="inline-flex items-center gap-2 text-[#8b949e] hover:text-[#318ce7] transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">11 5175-6162</span>
            </a>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Enlaces rapidos</h4>
            <ul className="space-y-3">
              {['Inicio', 'Servicios', 'Nosotros', 'Industrias', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-[#8b949e] hover:text-[#318ce7] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold mb-6">Industrias</h4>
            <ul className="space-y-3">
              {['Metalurgica', 'Medica', 'Alimenticia', 'Automotriz', 'Construccion'].map((item) => (
                <li key={item}>
                  <span className="text-[#8b949e]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#30363d] flex justify-center items-center">
          <p className="text-[#8b949e]/60 text-sm">
            {currentYear} Air Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
