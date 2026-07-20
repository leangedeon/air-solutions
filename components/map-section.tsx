export function MapSection() {
  return (
    <section aria-label="Ubicacion" className="relative w-full bg-[#0d1117]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5500!2d-58.62876090880227!3d-34.47794843711452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca50017d2fed5%3A0x8aa070eb3fa13d32!2sAir%20Solutions%20S.R.L.!5e0!3m2!1ses!2sar!4v1784589264061!5m2!1ses!2sar"
        title="Air Solutions S.R.L. - Av. Belgrano 2666, Don Torcuato"
        className="block h-[320px] w-full border-0 sm:h-[400px] lg:h-[450px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  )
}
