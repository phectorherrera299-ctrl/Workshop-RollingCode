import { Check, Copy, Moon, Share2, Sun, Ticket } from "lucide-react";
import { useEffect, useState } from "react";

export default function ExperienceTools() {
  const [visible, setVisible] = useState(false);
  const [temaClaro, setTemaClaro] = useState(
    () => localStorage.getItem("rolling-tema") === "light",
  );
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light-theme", temaClaro);
    localStorage.setItem("rolling-tema", temaClaro ? "light" : "dark");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", temaClaro ? "#f8f8f8" : "#0b0b0c");
  }, [temaClaro]);

  const compartir = async () => {
    const datos = {
      title: "Workshop Rolling Code",
      text: "¿Por dónde empiezo a programar? Una tarde para ordenar tus primeros pasos.",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(datos);
        return;
      }

      await navigator.clipboard.writeText(window.location.href);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 1800);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("No se pudo compartir el workshop.", error);
      }
    }
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-40 hidden items-center gap-2 rounded-full border border-rc-border bg-rc-surface/95 p-1.5 shadow-2xl backdrop-blur sm:flex">
        <button
          type="button"
          onClick={() => setTemaClaro((actual) => !actual)}
          aria-pressed={temaClaro}
          aria-label={temaClaro ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
          title={temaClaro ? "Modo oscuro" : "Modo claro"}
          className={`grid h-10 w-10 place-items-center rounded-full transition ${
            temaClaro ? "bg-rc-red text-white" : "text-rc-text-soft hover:bg-rc-surface-2"
          }`}
        >
          {temaClaro ? (
            <Moon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Sun className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {visible && (
        <div className="quick-actions fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-rc-border bg-rc-surface/95 p-1.5 shadow-2xl backdrop-blur">
          <button
            type="button"
            onClick={() => document.getElementById("entradas")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-rc-red px-5 text-sm font-extrabold text-white transition hover:bg-rc-red-dark"
          >
            <Ticket className="h-4 w-4" aria-hidden="true" />
            Asegurar mi lugar
          </button>
          <button
            type="button"
            onClick={compartir}
            className="grid h-11 w-11 place-items-center rounded-full text-rc-text-soft transition hover:bg-rc-surface-2 hover:text-white"
            aria-label={copiado ? "Enlace copiado" : "Compartir workshop"}
            title={copiado ? "Enlace copiado" : "Compartir workshop"}
          >
            {copiado ? (
              <Check className="h-5 w-5 text-rc-red" aria-hidden="true" />
            ) : navigator.share ? (
              <Share2 className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Copy className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      )}
    </>
  );
}
