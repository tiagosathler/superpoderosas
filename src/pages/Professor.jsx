import React from 'react';
import Docinho from '../components/Docinho';
import Florzinha from '../components/Florzinha';
import Lindinha from '../components/Lindinha';
import '../styles/Professor.css';

const MAX_CONTAGEM_PARA_DOCINHO = 15;

class Professor extends React.Component {
  constructor() {
    super();
    this.state = {
      temTarefaLindinha: true,
      temTarefaFlorzinha: true,
      temTarefaDocinho: true,
      visitante: '',
      contagem: 0,
      mensagemDeDocinho: '',

      // solucao: 0,
      // contagem: 0,
      // numeroA: 0,
      // numeroB: 0,
    };

    this.receberNome = this.receberNome.bind(this);
    this.contarNumero = this.contarNumero.bind(this);
    this.ouvirDocinho = this.ouvirDocinho.bind(this);
  }

  receberNome(nome) {
    if (nome !== '' && nome.length > 2) {
      this.setState({
        visitante: nome,
        temTarefaLindinha: false,
      });
    }
  }

  contarNumero() {
    const { contagem } = this.state;
    if (contagem < MAX_CONTAGEM_PARA_DOCINHO) {
      this.setState({
        contagem: contagem + 1,
      });
    } else {
      this.setState({
        temTarefaDocinho: false,
      });
    }
  }

  ouvirDocinho(mensagemRecebida) {
    this.setState({
      mensagemDeDocinho: mensagemRecebida,
    });
  }

  render() {
    const {
      temTarefaLindinha,
      nomeInvalido,
      temTarefaFlorzinha,
      temTarefaDocinho,
      mensagemDeDocinho,
      visitante,
      contagem,
    } = this.state;
    return (
      <div className="Professor">
        <small>componente Professor</small>
        <div className="espaco-do-professor">
          <div>
            <img src="https://www.clipartmax.com/png/full/159-1595855_%C2%A0-powerpuff-girls-professor-utonium.png" alt="Professor" width="100px" />
          </div>
          <div>
            <h3>Seja bem vindo</h3>
            { !temTarefaLindinha && <h4>{`Olá "${visitante}", amigo de Florzinha`}</h4>}
            { contagem > 0 && <h4>{`A contagem de Docinho: ${contagem}`}</h4> }
            { !temTarefaDocinho && <p>{`Docinho me disse: "${mensagemDeDocinho}" Danadinha!`}</p>}

          </div>
        </div>

        <div className="quarto-das-meninas">
          <small />

          <div className="espaco-da-menina">
            <small><em>espaço para Lindinha</em></small>
            { temTarefaLindinha
              ? (
                <Lindinha
                  receberNome={ this.receberNome }
                  nomeInvalido={ nomeInvalido }
                />
              )
              : <p>Lindinha já se foi...</p> }
          </div>

          <div className="espaco-da-menina">
            <small><em>espaço para Florzinha</em></small>
            { temTarefaFlorzinha ? <Florzinha /> : <p>Florzinha já se foi...</p> }
          </div>

          <div className="espaco-da-menina">
            <small><em>espaço para Docinho</em></small>
            { temTarefaDocinho
              ? (
                <Docinho
                  contagem={ contagem }
                  contarNumero={ this.contarNumero }
                  ouvirDocinho={ this.ouvirDocinho }
                />
              )
              : <p>Docinho já se foi....</p>}
          </div>

        </div>

      </div>
    );
  }
}

export default Professor;
