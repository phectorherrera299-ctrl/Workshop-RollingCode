import { useState, useRef, useEffect } from "react";
import { preguntas, contacto } from "../data/chatBot";

const logoSrc = `${import.meta.env.BASE_URL}img/logoRolling/logo-rolling.jpg`;
const botName = "Rolling Code";

const welcome =
  "¡Hola! 👋 Soy el asistente de Rolling Code. Elegí una opción o escribime tu consulta.";

const fallback =
  "No estoy seguro de haber entendido tu consulta. Probá con alguna de las opciones de abajo.";

const normalize = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const findQuestion = (text) => {
  const padded = ` ${normalize(text)} `;
  let best = null;
  let bestScore = 0;
  for (const item of preguntas) {
    const score = item.keywords.filter((k) =>
      padded.includes(` ${normalize(k)} `),
    ).length;
    if (score > bestScore) {
      best = item;
      bestScore = score;
    }
  }
  return best;
};

function ContactLinks() {
  if (!contacto.whatsapp && !contacto.email) return null;
  const linkClass =
    "inline-block rounded-full bg-rc-red px-3 py-1 text-xs font-extrabold text-rc-white transition hover:bg-rc-red-dark";
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {contacto.whatsapp && (
        <a
          className={linkClass}
          href={`https://wa.me/${contacto.whatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      )}
      {contacto.email && (
        <a className={linkClass} href={`mailto:${contacto.email}`}>
          Email
        </a>
      )}
    </div>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ from: "bot", text: welcome }]);
  const [showHint, setShowHint] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowHint(true), 5000);
    const hideTimer = setTimeout(() => setShowHint(false), 13000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = (text, item) => {
    const clean = text.trim();
    if (!clean) return;
    const match = item ?? findQuestion(clean);
    const reply = match
      ? { text: match.answer, showContact: match.showContact }
      : { text: fallback, showContact: true };
    setMessages((prev) => [...prev, { from: "user", text: clean }]);
    setTimeout(
      () => setMessages((prev) => [...prev, { from: "bot", ...reply }]),
      400,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(input);
    setInput("");
  };

  return (
    <div className="chat-widget fixed bottom-24 right-4 z-50 flex flex-col items-end gap-4 sm:bottom-12 sm:right-12">
      {open && (
        <div className="flex h-[28rem] max-h-[65dvh] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-rc-box border border-rc-border bg-rc-surface shadow-2xl sm:w-80">
          <div className="bg-rc-gradient flex items-center gap-2 px-4 py-3 text-rc-white">
            <img
              src={logoSrc}
              alt=""
              className="h-8 w-8 rounded-full object-cover"
            />
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
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-rc-option px-3 py-2 text-sm ${
                    m.from === "user"
                      ? "rounded-br-sm bg-rc-red text-rc-white"
                      : "rounded-bl-sm border border-rc-border bg-rc-surface-2 text-rc-text-soft"
                  }`}
                >
                  {m.text}
                  {m.showContact && <ContactLinks />}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="flex max-h-24 flex-wrap gap-2 overflow-y-auto border-t border-rc-border bg-rc-surface p-2">
            {preguntas.map((item) => (
              <button
                key={item.label}
                onClick={() => send(item.label, item)}
                className="rounded-full bg-rc-chip px-3 py-1 text-xs text-rc-text-soft transition hover:bg-rc-red hover:text-rc-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex gap-2 border-t border-rc-border bg-rc-surface p-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribí tu consulta..."
              className="flex-1 rounded-full border border-rc-border bg-rc-black px-3 py-2 text-sm text-rc-white outline-none placeholder:text-rc-text-mute focus:border-rc-red"
            />
            <button
              type="submit"
              className="rounded-full bg-rc-red px-4 py-2 text-sm font-extrabold text-rc-white transition hover:bg-rc-red-dark"
            >
              Enviar
            </button>
          </form>
        </div>
      )}

      {showHint && !open && (
        <div className="relative max-w-[16rem] rounded-rc-option bg-rc-white shadow-2xl">
          <button
            onClick={() => {
              setOpen(true);
              setShowHint(false);
            }}
            className="block px-4 py-3 pr-9 text-left text-sm font-semibold text-rc-black"
          >
            ¡Hola! 👋 ¿Tenés dudas sobre el workshop?
          </button>
          <button
            onClick={() => setShowHint(false)}
            aria-label="Cerrar aviso"
            className="absolute right-2 top-2 text-sm leading-none text-rc-text-on-white hover:text-rc-black"
          >
            ✕
          </button>
        </div>
      )}

      <div className="relative">
        {!open && (
          <span className="absolute inset-0 animate-[ping_1.5s_ease-out_2s_3] rounded-full bg-rc-red opacity-30 motion-reduce:animate-none" />
        )}
        <button
          onClick={() => {
            setOpen((o) => !o);
            setShowHint(false);
          }}
          aria-label={open ? "Cerrar chat" : "Abrir chat"}
          className={`relative flex items-center gap-3 rounded-full text-rc-white shadow-2xl ring-2 ring-white/30 transition hover:scale-105 ${
            open
              ? "h-14 w-14 justify-center bg-rc-red"
              : "bg-rc-gradient p-2 sm:pr-6"
          }`}
        >
          {open ? (
            <span className="text-xl">✕</span>
          ) : (
            <>
              <img
                src={logoSrc}
                alt=""
                className="h-12 w-12 rounded-full bg-rc-black object-cover ring-2 ring-white"
              />
              <span className="hidden text-sm font-extrabold sm:inline">¿Tenés dudas?</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}