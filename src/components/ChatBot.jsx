import { useState } from "react";

const logo_src = "/img/logoRolling/logo-rolling.jpg";
const bot_name = "Rolling Code";

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[28rem] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-rc-box border border-rc-border bg-rc-surface shadow-2xl sm:w-80">
          <div className="bg-rc-gradient flex items-center gap-2 px-4 py-3 text-rc-white">
            <img src={logo_src} alt="" className="h-8 w-8 rounded-full object-cover" />
            <span className="flex-1 text-sm font-semibold">{bot_name}</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="text-lg leading-none text-rc-white/80 hover:text-rc-white"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 p-3">
            <p className="text-sm text-rc-text-mute">Acá van a ir los mensajes.</p>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
        className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-rc-black shadow-lg ring-2 ring-rc-red transition hover:scale-105"
      >
        {open ? (
          <span className="text-xl text-rc-white">✕</span>
        ) : (
          <img src={logo_src} alt="Abrir chat" className="h-full w-full object-cover" />
        )}
      </button>
    </div>
  );
}