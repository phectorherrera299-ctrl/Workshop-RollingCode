import { useEffect, useRef, useState } from "react";

const useEnPantalla = (umbral = 0.4) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: umbral },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [umbral]);

  return [ref, visible];
};

export default useEnPantalla;
