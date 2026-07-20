'use client'

import { useState } from 'react'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-[#161b22] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#318ce7]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ec008c]/5 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-[#318ce7] font-semibold text-sm uppercase tracking-wider mb-4">
                Contacto
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Hablemos de tu proyecto
              </h2>
              <p className="text-lg text-[#8b949e] leading-relaxed">
                Contactanos y nuestro equipo especializado te brindara un presupuesto inmediato y sin compromiso.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <a href="tel:+5491151756162" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-[#318ce7] flex items-center justify-center glow-blue">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#8b949e]">Telefono</div>
                  <div className="text-lg font-semibold text-white">11 5175-6162</div>
                </div>
              </a>
              
              <a href="mailto:info@airsolutions.com.ar" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-[#21262d] border border-[#30363d] flex items-center justify-center group-hover:border-[#318ce7]/50 transition-colors">
                  <Mail className="w-6 h-6 text-[#8b949e] group-hover:text-[#318ce7] transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-[#8b949e]">Email</div>
                  <div className="text-lg font-semibold text-white">info@airsolutions.com.ar</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#21262d] border border-[#30363d] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#8b949e]" />
                </div>
                <div>
                  <div className="text-sm text-[#8b949e]">Ubicacion</div>
                  <div className="text-lg font-semibold text-white">Av. Belgrano 2666 - Don Torcuato</div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden hidden lg:block border border-[#30363d]">
              <img 
                src="/images/contact-support.png" 
                alt="Soporte tecnico Air Solutions"
                className="w-full h-[200px] object-cover"
              />
            </div>
          </div>
          
          {/* Right - Form */}
          <div className="bg-[#21262d] rounded-2xl p-8 lg:p-10 border border-[#30363d]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#8b949e] focus:outline-none focus:border-[#318ce7] focus:ring-1 focus:ring-[#318ce7] transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#8b949e] focus:outline-none focus:border-[#318ce7] focus:ring-1 focus:ring-[#318ce7] transition-colors"
                    placeholder="Tu telefono"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#8b949e] focus:outline-none focus:border-[#318ce7] focus:ring-1 focus:ring-[#318ce7] transition-colors"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg text-white placeholder-[#8b949e] focus:outline-none focus:border-[#318ce7] focus:ring-1 focus:ring-[#318ce7] transition-colors resize-none"
                  placeholder="Cuentanos sobre tu proyecto..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#318ce7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2678cc] transition-all group glow-blue"
              >
                Enviar mensaje
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
