export const calendarUrl = `https://calendar.google.com/calendar/render?${new URLSearchParams(
  {
    action: "TEMPLATE",
    text: "Workshop: ¿Por dónde empiezo a programar?",
    dates: "20261119T210000Z/20261120T004000Z",
    details: `Diez charlas cortas para dar tus primeros pasos en programación. Organiza Rolling Code School.\n\nMás info y entradas: ${window.location.origin}`,
    location: "Gral. Paz 576, San Miguel de Tucumán",
  },
).toString()}`;