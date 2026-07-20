'use client'

import {
  ArrowRight,
  Wrench,
  Package,
  Network,
  Fan,
} from 'lucide-react'
import Link from 'next/link'

const highlights = [
  {
    icon: Fan,
    title: 'Venta y alquiler',
    description:
      'Compresores a tornillo, secadores y filtros de línea.',
  },
  {
    icon: Wrench,
    title: 'Servicio técnico multimarca',
    description:
      'Mantenimiento de equipos Atlas Copco, Sullair, Kaeser, Ingersoll Rand, Chicago Pneumatic, Fiac, Fini, DMD, Cetec y más.',
  },
  {
    icon: Package,
    title: 'Repuestos originales',
    description: 'Venta de repuestos originales para tu equipo.',
  },
  {
    icon: Network,
    title: 'Ingeniería e instalación',
    description: 'Diseño e instalación de redes de aire comprimido.',
  },
]

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0d1117]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(49,140,231,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(49,140,231,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-[#318ce7]/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#ec008c]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-28 pb-24 sm:px-6 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold tracking-wider text-[#318ce7] uppercase">
                Air Solutions
              </p>
              <h1 className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                Soluciones integrales en{' '}
                <span className="text-[#318ce7]">aire comprimido</span>
              </h1>
            </div>

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#30363d] bg-[#21262d]">
                    <item.icon className="h-5 w-5 text-[#318ce7]" />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h2 className="text-base font-semibold text-white sm:text-lg">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-[#8b949e] sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-8 border-y border-[#30363d] py-6">
              <div>
                <div className="text-3xl font-bold text-white">+20</div>
                <div className="text-sm text-[#8b949e]">
                  Años de experiencia en el rubro
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#318ce7]">500+</div>
                <div className="text-sm text-[#8b949e]">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-[#8b949e]">Soporte tecnico</div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contacto"
                className="glow-blue group inline-flex items-center justify-center gap-2 rounded-lg bg-[#318ce7] px-8 py-4 text-lg font-semibold text-white transition-all hover:gap-4 hover:bg-[#2678cc]"
              >
                Solicitar cotizacion
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#30363d] bg-[#21262d] px-8 py-4 text-lg font-semibold text-white transition-all hover:border-[#318ce7]/50 hover:bg-[#30363d]"
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="glow-blue relative overflow-hidden rounded-2xl border border-[#30363d]">
              <img
                src="/images/compressor-main.jpg"
                alt="Compresor de aire industrial Air Solutions Argentina"
                className="h-[560px] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/80 to-transparent p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#318ce7]">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">Entrega y Logistica</div>
                    <div className="text-sm text-[#8b949e]">En todo el pais</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-2xl bg-gradient-to-br from-[#318ce7] to-[#ec008c] opacity-20 blur-2xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-sm text-[#8b949e]">Scroll</span>
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-[#30363d]">
          <div className="mt-2 h-3 w-1.5 animate-bounce rounded-full bg-[#318ce7]" />
        </div>
      </div>
    </section>
  )
}
