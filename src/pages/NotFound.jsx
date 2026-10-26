// src/pages/NotFound.jsx
export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-[#8b0000] px-4 py-16">
      {/* Tarjeta superior */}
      <div className="relative mx-auto max-w-4xl rounded-2xl bg-[#e01b24] px-8 py-10 shadow-lg sm:px-12">
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              ERROR 404
            </h1>
            <p className="mt-4 text-xl font-semibold text-white sm:text-2xl">
              Ups, esta ruta no existe.
            </p>
          </div>

          {/* Ventana de código */}
          <div className="w-56 shrink-0 overflow-hidden rounded-xl bg-black shadow-xl">
            <div className="flex items-center gap-1.5 bg-[#2a2a2a] px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex items-center justify-between px-4 py-6">
              <div className="space-y-2">
                <span className="block text-2xl font-bold text-white">&lt;/&gt;</span>
                <span className="block h-1 w-16 rounded bg-gray-500" />
                <span className="block h-1 w-12 rounded bg-gray-500" />
              </div>
              <span className="text-4xl font-bold text-[#e01b24]">?</span>
            </div>
          </div>
        </div>
      </div>

      {/* Texto y botones */}
      <div className="relative mx-auto mt-10 max-w-4xl">
        <p className="text-base text-white/90 sm:text-lg">
          La página que buscás se perdió entre líneas de código.
          <br />
          Volvé al inicio o explorá el workshop.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/"
            className="rounded-full bg-black px-8 py-3 text-sm font-bold text-white transition hover:bg-neutral-800"
          >
            Volver al inicio
          </a>
          <a
            href="/workshop"
            className="rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition hover:bg-neutral-200"
          >
            Ver el workshop
          </a>
        </div>
      </div>
    </section>
  );
}
