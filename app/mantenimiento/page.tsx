import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sitio en mantenimiento | Air Solutions',
  description: 'El sitio se encuentra temporalmente en mantenimiento.',
  robots: { index: false, follow: false },
}

export default function MaintenancePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-foreground">
      <div className="max-w-md space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--brand-blue)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Sitio en mantenimiento
        </h1>

        <p className="text-balance text-muted-foreground">
          Estamos realizando tareas de mantenimiento para mejorar tu
          experiencia. Volveremos a estar en línea en breve.
        </p>

        <p className="text-sm text-muted-foreground">
          Gracias por tu paciencia.
        </p>
      </div>
    </main>
  )
}
