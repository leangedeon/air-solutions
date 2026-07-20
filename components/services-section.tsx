'use client'

import { Wrench, Truck, Shield, Clock, HeadphonesIcon, Settings } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Asesoramiento Tecnico',
    description: 'Nuestro departamento tecnico analiza tu necesidad para brindarte la solucion mas eficiente en calidad de aire y ahorro energetico.',
  },
  {
    icon: Shield,
    title: 'Especializacion y Respaldo',
    description: '+20 años de experiencia en el rubro garantizando soluciones integrales, confiables y eficientes para nuestros clientes en toda Argentina.',
  },
  {
    icon: Truck,
    title: 'Entrega a Todo el Pais',
    description: 'Nuestra logistica garantiza que los equipos y repuestos solicitados lleguen en tiempo y forma a cualquier punto del pais.',
  },
  {
    icon: Clock,
    title: 'Presupuesto Inmediato',
    description: 'Equipo especializado para brindarte un presupuesto rapido y ajustado a tus necesidades especificas.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Soporte 24/7',
    description: 'Seguro de resguardo en materia de seguridad e higiene tanto para el personal como para los equipos.',
  },
  {
    icon: Settings,
    title: 'Mantenimiento Preventivo',
    description: 'Servicio de revision y asistencia de nuestros productos para garantizar su correcto funcionamiento.',
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-[#161b22] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#318ce7]/5 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block text-[#318ce7] font-semibold text-sm uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Soluciones integrales en aire comprimido
          </h2>
          <p className="text-lg text-[#8b949e] leading-relaxed">
            Combinamos experiencia, tecnologia y compromiso para ofrecer el mejor servicio de alquiler de compresores industriales del mercado.
          </p>
        </div>
        
        {/* Image + Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured Image */}
          <div className="lg:row-span-2 rounded-2xl overflow-hidden border border-[#30363d]">
            <img 
              src="/images/services-compressor.png" 
              alt="Compresores de aire industriales"
              className="w-full h-full object-cover min-h-[300px] lg:min-h-full"
            />
          </div>
          
          {/* Services Cards */}
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#21262d] rounded-xl p-6 hover:bg-[#30363d] transition-all duration-300 border border-[#30363d] hover:border-[#318ce7]/50"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[#318ce7]/10 flex items-center justify-center mb-4 group-hover:bg-[#318ce7] transition-colors">
                <service.icon className="w-6 h-6 text-[#318ce7] group-hover:text-white transition-colors" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
