import React, { Component } from 'react';
import '../styles/RenderizaResultados.css';

class RenderizaResultados extends Component {
  render() {
    const {
      temTarefaLindinha,
      temTarefaFlorzinha,
      temTarefaDocinho,
      respostaFlorzinha,
      contagemDocinho,
      mensagemDocinho,
      visitante } = this.props;
    return (
      <div className="espaco-do-professor">
        <div className="imagem-do-professor">
          <img src="images/Professor.png" alt="Professor" width="100px" />
        </div>
        <div className="resultados">
          <h3>Seja bem vindo</h3>
          <p>Algumas tarefas foram combinadas com as meninas...</p>
          <p>
            Lindinha me passará seu nome,
            Florzinha deve resolver uma tabuada
            e Docinho deve clicar 15 vezes no botão Contar. Vqv!
          </p>
          {/* Renderize os resultados de Lindinha */}
          { !temTarefaLindinha && <h4>{`Olá "${visitante}", amigo de Lindinha`}</h4>}

          {/* Renderiza resultados de Florzinha */}

          {/* Renderiza resultados de Docinho */}
          { contagemDocinho > 0 && <h4>{`A contagem de Docinho: ${contagemDocinho}`}</h4> }
          { !temTarefaDocinho
        && <p>{`Docinho me disse: "${mensagemDocinho}" Danadinha!`}</p>}

          {/* Renderiza Redirect para outra Rota e Pagina */}

        </div>
      </div>
    );
  }
}

export default RenderizaResultados;
