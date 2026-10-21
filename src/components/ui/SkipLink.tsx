/** Primer elemento enfocable: salta la navegación hasta el contenido principal. */
export function SkipLink() {
  return (
    <a
      href="#contenido"
      className="fixed top-3 left-4 z-60 -translate-y-24 rounded-control bg-accent px-4 py-2.5 text-body-sm font-semibold text-accent-fg shadow-glow transition-transform duration-200 ease-standard focus:translate-y-0"
    >
      Saltar al contenido
    </a>
  )
}
