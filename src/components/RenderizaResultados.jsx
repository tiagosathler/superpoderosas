import React, { Component } from 'react';
import '../styles/RenderizaResultados.css';

class RenderizaResultados extends Component {
  render() {
    const { state } = this.props;
    const {
      temTarefaLindinha,
      visitante,
      numA,
      numB,
      numAAnt,
      numBAnt,
      tabuada,
      taErradoFlorzinha,
      passeiNovosNumeros,
      temTarefaDocinho,
      contagem,
      mensagemDeDocinho,
    } = state;

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
          {/* Renderiza resultados de Lindinha */}
          { !temTarefaLindinha && <h4>{`Olá "${visitante}", amigo de Lindinha`}</h4>}

          {/* Renderiza resultados de Florzinha */}
          { !taErradoFlorzinha
          && tabuada > 0
          && (
            <h4>
              {
                `A Florzinha resolveu a tabuada de "${numA} x ${numB} = ${tabuada}"!`
              }
            </h4>)}
          { taErradoFlorzinha
        && tabuada
        && (
          <p>
            {
              `Tá errado Florzinha!
              Tabuada de "${numAAnt} x ${numBAnt}" não é "${tabuada}"!`
            }
          </p>)}
          { taErradoFlorzinha
        && passeiNovosNumeros
        && (
          <p>
            {
              `Passei outros números da tabuada (${numA} x ${numB})
              para Florzinha, vamos ver se ela sabe agora...`
            }
          </p>)}

          {/* Renderiza resultados de Docinho */}
          { contagem > 0 && <h4>{`A contagem de Docinho: ${contagem}`}</h4> }
          { !temTarefaDocinho
        && <p>{`Docinho me disse: "${mensagemDeDocinho}" Danadinha!`}</p>}

          {/* Renderiza Redirect para outra Rota e Pagina */}
          {/* { !temTarefaLindinha && !temTarefaFlorzinha && !temTarefaDocinho && <Link to="/vilao">Ir Para o Vilão </Link> } */}
        </div>
      </div>
    );
  }
}

export default RenderizaResultados;
