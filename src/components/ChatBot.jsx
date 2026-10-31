import { useState, useRef, useEffect } from "react";
import { preguntas } from "../data/chatBot";

const logoSrc = "/img/logoRolling/logo-rolling.jpg";
const botName = "Rolling Code";

const welcome =
  "¡Hola! 👋 Soy el asistente de Rolling Code. Elegí una opción o escribime tu consulta.";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: welcome }]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendOption = (item) => {
    setMessages((prev) => [...prev, { from: "user", text: item.label }]);
    setTimeout(
      () => setMessages((prev) => [...prev, { from: "bot", text: item.answer }]),
      400
    );
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[28rem] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-rc-box border border-rc-border bg-rc-surface shadow-2xl sm:w-80">
          <div className="bg-rc-gradient flex items-center gap-2 px-4 py-3 text-rc-white">
            <img src={logoSrc} alt="" className="h-8 w-8 rounded-full object-cover" />
            <span className="flex-1 text-sm font-semibold">{botName}</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="text-lg leading-none text-rc-white/80 hover:text-rc-white"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-2 overflow-y-auto bg-rc-black p-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-rc-option px-3 py-2 text-sm ${
                    m.from === "user"
                      ? "rounded-br-sm bg-rc-red text-rc-white"
                      : "rounded-bl-sm border border-rc-border bg-rc-surface-2 text-rc-text-soft"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="flex max-h-24 flex-wrap gap-2 overflow-y-auto border-t border-rc-border bg-rc-surface p-2">
            {preguntas.map((item) => (
              <button
                key={item.label}
                onClick={() => sendOption(item)}
                className="rounded-full bg-rc-chip px-3 py-1 text-xs text-rc-text-soft transition hover:bg-rc-red hover:text-rc-white"
              >
                {item.label}
              </button>
            ))}
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
          <img src={logoSrc} alt="Abrir chat" className="h-full w-full object-cover" />
        )}
      </button>
    </div>
  );
}