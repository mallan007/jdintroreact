
import { useState } from "react";

const Placar = () => {
 const [golArg, setGolArg] = useState(0);
 const [golFr, setGolFr] = useState(0);

 const [fimDeJogo, setFimDeJogo] = useState(false);

 let corArg;
 let corFr;

 if (fimDeJogo) {
   if (golArg > golFr) {
     corArg = "yellow";
   } else if (golFr > golArg) {
     corFr = "yellow";
   }
 }

 return (
   <>
     <h1>
       <span style={{ color: corArg }}>{`Argentina: ${golArg}`}</span> X{" "}
       <span style={{ color: corFr }}>{`França: ${golFr}`}</span>
     </h1>
     <button disabled={fimDeJogo} onClick={() => setGolArg(golArg + 1)}>
       Inserir Gol Argentina
     </button>
     <button disabled={fimDeJogo} onClick={() => setGolFr(golFr + 1)}>
       Inserir Gol França
     </button>
     <br></br>
     <button
       disabled={fimDeJogo}
       onClick={function () {
         setFimDeJogo(true);
       }}
     >
       Fim de jogo
     </button>
     <br />
     {fimDeJogo && golArg === golFr && <span>Penalties</span>}
   </>
 );
};

export default Placar;



