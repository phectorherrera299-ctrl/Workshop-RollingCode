import { useState } from "react";

const LOGO_SRC = "/img/logoRolling/logo-rolling.jpg";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-rc-black shadow-lg ring-2 ring-rc-red transition hover:scale-105"
      >
        {open ? (
          <span className="text-xl text-rc-white">✕</span>
        ) : (
          <img src={LOGO_SRC} alt="Abrir chat" className="h-full w-full object-cover" />
        )}
      </button>
    </div>
  );
}