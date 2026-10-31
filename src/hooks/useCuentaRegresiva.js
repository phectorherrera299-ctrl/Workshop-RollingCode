import { useEffect, useState } from "react";

const calcular = (fechaLimite) => {
  const restante = Math.max(fechaLimite - Date.now(), 0);
  const dias = Math.floor(restante / 86400000);
  const horas = Math.floor((restante % 86400000) / 3600000);
  const minutos = Math.floor((restante % 3600000) / 60000);
  const segundos = Math.floor((restante % 60000) / 1000);
  return { dias, horas, minutos, segundos };
};

const useCuentaRegresiva = (fechaLimite) => {
  const [tiempo, setTiempo] = useState(() => calcular(fechaLimite));

  useEffect(() => {
    const id = setInterval(() => setTiempo(calcular(fechaLimite)), 1000);
    return () => clearInterval(id);
  }, [fechaLimite]);

  return tiempo;
};

export default useCuentaRegresiva;