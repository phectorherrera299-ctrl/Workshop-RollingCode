import { useEffect, useState } from "react"

const useContador = (final, activo, duracion = 1500) => {
  const [valor, setValor] = useState(0)

  useEffect(() => {
    if (!activo) return

    let inicio = null
    let frame

    const paso = (tiempo) => {
      if (inicio === null) inicio = tiempo
      const progreso = Math.min((tiempo - inicio) / duracion, 1)
      setValor(Math.round(final * progreso))
      if (progreso < 1) frame = requestAnimationFrame(paso)
    }

    frame = requestAnimationFrame(paso)
    return () => cancelAnimationFrame(frame)
  }, [final, activo, duracion])

  return valor
}

export default useContador