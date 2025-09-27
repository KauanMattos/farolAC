import { useState, useEffect } from "react";
import Farol from "./components/farol";
import "./index.css";

const TOTAL_LUZES = 5;
const INTERVALO = 600;

export default function App() {
  const [estado, setEstado] = useState("off");
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (estado === "red" && contador < TOTAL_LUZES) {
      const timer = setTimeout(() => {
        setContador((prev) => prev + 1);
      }, INTERVALO);
      return () => clearTimeout(timer);
    }
    if (estado === "red" && contador === TOTAL_LUZES) {
      const goTimer = setTimeout(() => setEstado("green"), 800);
      return () => clearTimeout(goTimer);
    }
  }, [estado, contador]);

  function iniciar() {
    setEstado("red");
    setContador(0);
  }

  return (
    <div className="app">
      <h1>Largada de Corrida</h1>

      <div className="lights">
        {Array.from({ length: TOTAL_LUZES }).map((_, i) => (
          <Farol
            key={i}
            cor={estado === "green" ? "limegreen" : "red"}
            ativa={estado === "green" || i < contador}
          />
        ))}
      </div>

      {estado === "green" && <h2 className="go">GO!</h2>}

      <button onClick={iniciar} className="btn">
        Começar Corrida
      </button>
    </div>
  );
}
