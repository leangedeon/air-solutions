'use client'

import { Factory, Stethoscope, Utensils, Shirt, FlaskConical, Car, Building2, Box } from 'lucide-react'

const industries = [
  { icon: Factory, name: 'Metalurgica', description: 'Procesos de corte, soldadura y tratamiento de metales' },
  { icon: Stethoscope, name: 'Medica', description: 'Equipamiento hospitalario y laboratorios' },
  { icon: Utensils, name: 'Alimenticia', description: 'Procesamiento y envasado de alimentos' },
  { icon: Shirt, name: 'Textil', description: 'Manufactura y tenido de textiles' },
  { icon: FlaskConical, name: 'Quimica', description: 'Procesos quimicos y farmaceuticos' },
  { icon: Car, name: 'Automotriz', description: 'Lineas de produccion y pintura' },
  { icon: Building2, name: 'Construccion', description: 'Herramientas neumaticas y equipos' },
  { icon: Box, name: 'Plastica', description: 'Moldeo por inyeccion y extrusion' },
]

export function IndustriesSection() {
  return (
    <section id="industrias" className="py-24 lg:py-32 bg-[#161b22] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#318ce7]/5 rounded-full blur-[200px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block text-[#318ce7] font-semibold text-sm uppercase tracking-wider mb-4">
            Sectores
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Industrias con las que trabajamos
          </h2>
          <p className="text-lg text-[#8b949e] leading-relaxed">
            Brindamos soluciones especializadas para cada sector industrial, adaptandonos a los requerimientos especificos de cada operacion.
          </p>
        </div>
        
        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-[#21262d] rounded-xl p-6 lg:p-8 hover:bg-[#30363d] transition-all duration-300 border border-[#30363d] hover:border-[#318ce7]/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#318ce7]/10 flex items-center justify-center mb-4 group-hover:bg-[#318ce7] transition-colors">
                <industry.icon className="w-7 h-7 text-[#318ce7] group-hover:text-white transition-colors" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed hidden lg:block">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
