import React from 'react';

import Docinho from '../components/Docinho';
import Florzinha from '../components/Florzinha';
import Lindinha from '../components/Lindinha';
import RenderizaResultados from '../components/RenderizaResultados';
import '../styles/Professor.css';

class Professor extends React.Component {
  constructor() {
    super();
    this.state = {
      temTarefaLindinha: true,
      temTarefaFlorzinha: true,
      temTarefaDocinho: true,
      respostaFlorzinha: '',
      numA: '',
      numB: '',
      visitante: '',
      contagem: 0,
      mensagem: '',
    };
    this.receberNomeDeLindinha = this.receberNomeDeLindinha.bind(this);
    this.contarCliquesDeDocinho = this.contarCliquesDeDocinho.bind(this);
    this.renderizarDocinho = this.renderizarDocinho.bind(this);
    this.receberMensagemDeDocinho = this.receberMensagemDeDocinho.bind(this);
    this.receberRespostaFlorzinha = this.receberRespostaFlorzinha.bind(this);
  }

  receberNomeDeLindinha(nome) {
    if (nome.length > 3) {
      this.setState({
        visitante: nome,
        temTarefaLindinha: false,
      });
    }
  }

  contarCliquesDeDocinho() {
    const { contagem } = this.state;
    if (contagem < 15) {
      this.setState({
        contagem: contagem + 1,
      });
    } else {
      this.setState({
        temTarefaDocinho: false,
      });
    }
  }

  receberMensagemDeDocinho(texto) {
    this.setState({
      mensagem: texto,
    });
  }

  receberRespostaFlorzinha(numA, numB, resposta) {
    // console.log(typeof numA, typeof numB, typeof resposta);
    if (Number(resposta) === numA * numB) {
      this.setState({
        numA,
        numB,
        respostaFlorzinha: resposta,
        temTarefaFlorzinha: false,
      });
    } else {
      console.log('é falso');
    }
  }

  renderizarDocinho() {
    const { temTarefaDocinho, contagem } = this.state;
    return (
      <div className="espaco-da-menina docinho">
        {
          temTarefaDocinho
            ? (
              <Docinho
                funcParaDocinho={ this.contarCliquesDeDocinho }
                contagem={ contagem }
                funcMensagemDeDocinho={ this.receberMensagemDeDocinho }
              />
            )
            : (
              <div>
                <p>Docinho se foi....</p>
              </div>
            )
        }
      </div>
    );
  }

  render() {
    const {
      temTarefaLindinha,
      temTarefaFlorzinha,
      temTarefaDocinho,
      respostaFlorzinha,
      contagem,
      visitante,
      mensagem,
    } = this.state;
    return (
      <div className="Professor">
        <small>componente Professor</small>
        <RenderizaResultados
          temTarefaLindinha={ temTarefaLindinha }
          temTarefaFlorzinha={ temTarefaFlorzinha }
          temTarefaDocinho={ temTarefaDocinho }
          respostaFlorzinha={ respostaFlorzinha }
          contagemDocinho={ contagem }
          mensagemDocinho={ mensagem }
          visitante={ visitante }

        />

        <h1>{ !temTarefaFlorzinha && `Resposta de Florzinha: ${respostaFlorzinha}` }</h1>

        <div className="quarto-das-meninas">

          <div className="espaco-da-menina lindinha">
            <small><em>espaço para Lindinha</em></small>
            { temTarefaLindinha
              ? (
                <Lindinha
                  funcParaLindinha={ this.receberNomeDeLindinha }
                />
              )
              : (
                <div>
                  <p>Lindinha se foi....</p>
                </div>
              )}
          </div>

          <div className="espaco-da-menina florzinha">
            <small><em>espaço para Florzinha</em></small>
            { temTarefaFlorzinha
              ? (
                <Florzinha
                  mandarResposta={ this.receberRespostaFlorzinha }
                />
              )
              : (
                <div>
                  <p>Florzinha se foi....</p>
                </div>
              )}
          </div>

          <div className="espaco-da-menina docinho">
            <small><em>espaço para Docinho</em></small>
            { this.renderizarDocinho() }
          </div>
        </div>
      </div>
    );
  }
}

export default Professor;
