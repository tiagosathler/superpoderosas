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
      temTarefaLindinha: true, // estado inicial para ser usado no ternário do render e controlar o que será renderizado ou não
      temTarefaFlorzinha: true,
      temTarefaDocinho: true,
      visitante: '',
      contagem: 0,
      mensagem: '',
      respostaFlorzinha: '',
    };
    this.receberNomeDeLindinha = this.receberNomeDeLindinha.bind(this);
    this.contarCliquesDeDocinho = this.contarCliquesDeDocinho.bind(this);
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
    if (Number(resposta) === numA * numB) { // preciso receber numA e numB de florzinha; outra coisa q resposta está vindo como string
      this.setState({
        temTarefaFlorzinha: false,
        respostaFlorzinha: resposta,
      });
    }
  }

  render() {
    const {
      temTarefaLindinha,
      temTarefaFlorzinha,
      temTarefaDocinho,
      visitante,
      contagem,
      mensagem,
      respostaFlorzinha,
    } = this.state;
    return (
      <div className="Professor">
        <small>componente Professor</small>
        <RenderizaResultados />
        <h2>{ visitante }</h2>
        <h2>{ `Contagem de Docinho: ${contagem}` }</h2>
        <h2>
          { !temTarefaFlorzinha && `Resposta de Florzinha: ${respostaFlorzinha}` }
          {/* { temTarefaFlorzinha
            ? null
            : `Resposta de Florzinha: ${respostaFlorzinha}` } */}
        </h2>

        <div className="quarto-das-meninas">

          <div className="espaco-da-menina lindinha">
            <small><em>espaço para Lindinha</em></small>
            { temTarefaLindinha
              ? (
                <Lindinha
                  funcParaLindinha={ this.receberNomeDeLindinha } // funcParaLindinha é a prop
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
                  mandarResposta={ this.receberRespostaFlorzinha } // mandarResposta é uma chave do objeto props
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
            { temTarefaDocinho
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
                  <p>{ `Mensagem de Docinho: ${mensagem}` }</p>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Professor;
