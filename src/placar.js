import { useState } from "react";

const Selecao = (props) => {
 return (
   <div style={{ width: "100%", textAlign: "center" }}>
     <span
       style={{
         color:
           props.jogoAcabou && props.gols > props.golsAdversario
             ? "blue"
             : undefined
       }}
     >
       {props.nome}: {props.gols}
     </span>
     <br />
     <button
       style={{ width: "100%" }}
       disabled={props.jogoAcabou}
       onClick={props.gol}
     >
       +
     </button>
   </div>
 );
};

export default function App() {
 const [argentina, setArgentina] = useState(0);
 const [franca, setFranca] = useState(0);

 const [jogoAcabou, setJogoAcabou] = useState(false);

 function acabarJogo() {
   setJogoAcabou(true);
 }

 function golDaArgentina() {
   setArgentina(argentina + 1);
 }

 function golDaFranca() {
   setFranca(franca + 1);
 }

 return (
   <>
     <div
       style={{
         margin: "10px 0px",
         display: "flex",
         justifyContent: "space-between"
       }}
     >
       <Selecao
         nome="Argentina"
         jogoAcabou={jogoAcabou}
         gols={argentina}
         golsAdversario={franca}
         gol={golDaArgentina}
       />
       x{" "}
       <Selecao
         nome="França"
         jogoAcabou={jogoAcabou}
         gols={franca}
         golsAdversario={argentina}
         gol={golDaFranca}
       />
     </div>
     {jogoAcabou && argentina === franca && <p>Penalties</p>}
     <button
       style={{ width: "100%" }}
       disabled={jogoAcabou}
       onClick={acabarJogo}
     >
       Acabar o jogo
     </button>
   </>
 );
}

