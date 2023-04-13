import "./styles.css";

function Ficha(props) {
  return (
    <div>
      <h2>Oi {props.nome}</h2>
      <h2>Você tem {props.idade} anos</h2>
      {false}
      {props.brasileiroNato ? "AUHUAHA" : "HAHAHAHA"}
      <h2>{`Você é brasileiro nato? ${props.brasileiroNato}`}</h2>
    </div>
  );
}

Ficha.defaultProps = {
  brasileiroNato: true
};

function Placar(props) {
  //francaCampea
  let corArgentina;
  let corFranca;

  if (props.francaCampea) {
    corFranca = "yellow";
  } else {
    corArgentina = "yellow";
  }

  return (
    <span>
      <span style={{ color: corArgentina }}>Argentina</span> x{" "}
      <span style={{ color: corFranca }}>França</span>
    </span>
  );
}

function PlacarComTimer(props) {
  return (
    <div>
      <p>Argentina x França</p>
      <p>Tempo: {props.tempoDeJogo}</p>
      {props.tempoDeJogo > 90 && <p>Fim de Jogo</p>}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Placar francaCampea={false} />
      <PlacarComTimer tempoDeJogo={91} />
      {/*<Ficha nome="Nicolas" idade={22} />
      <Ficha nome="Renan" idade={19} brasileiroNato={false} />*/}
    </div>
  );
}
