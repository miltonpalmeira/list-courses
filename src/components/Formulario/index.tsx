import React, { useState } from "react";
import Button from "../Button";
import { ITarefa } from "../types/tarefa";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  function addTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setTarefa("");
    setTempo("00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={addTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que você quer estudar?"
          required
          value={tarefa}
          onChange={(evento) =>
            setTarefa(evento.target.value)
          }
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
          value={tempo}
          onChange={(evento) =>
            setTempo(evento.target.value)
          }
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

/*
  CLASS COMPONENT
 */
// class Formulario1 extends React.Component<{
//   setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
// }> {
//   state = {
//     tarefa: "",
//     tempo: "00:00",
//   };

//   addTarefa(evento: React.FormEvent<HTMLFormElement>) {
//     evento.preventDefault();
//     this.props.setTarefas((tarefasAntigas) => [
//       ...tarefasAntigas,
//       { ...this.state, selecionado: false, completado: false, id: uuidv4() },
//     ]);
//     this.setState({ tarefa: "", tempo: "00:00" });
//   }

//   render() {
//     return (
//       <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
//         <div className={style.inputContainer}>
//           <label htmlFor="task">Adicione um novo estudo</label>
//           <input
//             type="text"
//             name="task"
//             id="task"
//             placeholder="O que você quer estudar?"
//             required
//             value={this.state.tarefa}
//             onChange={(evento) =>
//               this.setState({ ...this.state, tarefa: evento.target.value })
//             }
//           />
//         </div>
//         <div className={style.inputContainer}>
//           <label htmlFor="tempo">Tempo</label>
//           <input
//             type="time"
//             step="1"
//             name="tempo"
//             id="tempo"
//             min="00:00:00"
//             max="01:30:00"
//             required
//             value={this.state.tempo}
//             onChange={(evento) =>
//               this.setState({ ...this.state, tempo: evento.target.value })
//             }
//           />
//         </div>
//         <Button type="submit">Adicionar</Button>
//       </form>
//     );
//   }
// }

export default Formulario;
