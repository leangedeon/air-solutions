'use client'

import { useEffect, useRef, useState } from 'react'

const clients = [
  { name: 'Michelin', logo: '/clients/clientes-1.jpg' },
  { name: 'Consper Construcciones', logo: '/clients/clientes-2.jpg' },
  { name: 'RESET Electromecanica', logo: '/clients/clientes-3.jpg' },
  { name: 'Brahma Neumaticos', logo: '/clients/clientes-4.jpg' },
  { name: 'Forestal Guatrache SRL', logo: '/clients/clientes-5.jpg' },
  { name: 'NN Arquitectura', logo: '/clients/clientes-6.jpg' },
  { name: 'Electrorental', logo: '/clients/clientes-7.jpg' },
]

export function ClientsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  return (
    <section id="clientes" className="py-24 lg:py-32 bg-[#0d1117] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ec008c]/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-[#318ce7] font-semibold text-sm uppercase tracking-wider mb-4">
            Clientes
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Confian en nosotros
          </h2>
          <p className="text-lg text-[#8b949e] leading-relaxed">
            Trabajamos para ser el socio estrategico de nuestros clientes, brindando soluciones a medida con una estructura dedicada y orientada al cliente.
          </p>
        </div>
        
        {/* Clients Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0d1117] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0d1117] to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="flex items-center gap-12 overflow-hidden py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicate clients for infinite scroll */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] h-[100px] bg-[#161b22] rounded-xl flex items-center justify-center p-4 border border-[#30363d] hover:border-[#318ce7]/50 transition-colors"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#30363d] pt-16">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#318ce7] mb-2">500+</div>
            <div className="text-sm text-[#8b949e]">Proyectos completados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-[#8b949e]">Satisfaccion del cliente</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-[#ec008c] mb-2">8+</div>
            <div className="text-sm text-[#8b949e]">Industrias atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15</div>
            <div className="text-sm text-[#8b949e]">Años en el mercado</div>
          </div>
        </div>
      </div>
    </section>
  )
}
