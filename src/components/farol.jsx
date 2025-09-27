import "../index.css";

export default function Farol({ cor, ativa }) {
  const estilo = {
    backgroundColor: ativa ? cor : "#222",
    boxShadow: ativa ? `0 0 15px ${cor}` : "none",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    transition: "background-color 0.5s, box-shadow 0.3s",
  };

  return <div className="light" style={estilo}></div>;
}
