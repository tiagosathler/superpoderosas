import React from 'react';

import Docinho from '../components/Docinho';
import Florzinha from '../components/Florzinha';
import Lindinha from '../components/Lindinha';
import RenderizaResultados from '../components/RenderizaResultados';
import '../styles/Professor.css';

const MAX_CONTAGEM_PARA_DOCINHO = 15;
const MAX_MULTIPLICADOR = 10;

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
      numA: 0,
      numB: 0,
      numAAnt: 0,
      numBAnt: 0,
      tabuada: 0,
      taErradoFlorzinha: false,
      passeiNovosNumeros: false,
    };

    this.receberNomeDeLindinha = this.receberNomeDeLindinha.bind(this);
    this.receberTabuadaDeFlorzinha = this.receberTabuadaDeFlorzinha.bind(this);
    this.contarNumeroDeDocinho = this.contarNumeroDeDocinho.bind(this);
    this.ouvirDocinho = this.ouvirDocinho.bind(this);
    this.chamarMeninaDeVolta = this.chamarMeninaDeVolta.bind(this);
  }

  receberNomeDeLindinha(nome) {
    if (nome !== '' && nome.length > 2) {
      this.setState({
        visitante: nome,
        temTarefaLindinha: false,
      });
    }
  }

  receberTabuadaDeFlorzinha(numA, numB, resultado) {
    // console.log(`Testando tabuada no professor: ${numA} x ${numB} === ${resultado} ?`);
    if (numA * numB === Number(resultado)) {
      this.setState({
        numA,
        numB,
        tabuada: resultado,
        temTarefaFlorzinha: false,
        taErradoFlorzinha: false,
        passeiNovosNumeros: false,
      });
    } else {
      const novoNumA = Math.ceil(Math.random() * MAX_MULTIPLICADOR);
      const novoNumB = Math.ceil(Math.random() * MAX_MULTIPLICADOR);
      this.setState({
        numA: novoNumA,
        numB: novoNumB,
        numAAnt: numA,
        numBAnt: numB,
        tabuada: resultado,
        taErradoFlorzinha: true,
        temTarefaFlorzinha: true,
        passeiNovosNumeros: true,
      });
    }
  }

  contarNumeroDeDocinho() {
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

  chamarMeninaDeVolta({ target }) {
    const { name } = target;
    switch (name) {
    case 'lindinha':
      this.setState({
        temTarefaLindinha: true,
        visitante: '',
      });
      break;
    case 'florzinha':
      this.setState({
        temTarefaFlorzinha: true,
        numA: 0,
        numB: 0,
        numAAnt: 0,
        numBAnt: 0,
        tabuada: 0,
        taErradoFlorzinha: false,
        passeiNovosNumeros: false,
      });
      break;
    case 'docinho':
      this.setState({
        temTarefaDocinho: true,
        contagem: 0,
        mensagemDeDocinho: '',
      });
      break;
    default:
      console.log('ops... algo esta errado');
    }
  }

  render() {
    const {
      temTarefaLindinha,
      visitante,
      nomeInvalido,
      temTarefaFlorzinha,
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
    } = this.state;
    return (
      <div className="Professor">
        <small>componente Professor</small>
        <RenderizaResultados
          state={
            ({ temTarefaLindinha,
              temTarefaDocinho,
              visitante,
              numA,
              numB,
              numAAnt,
              numBAnt,
              tabuada,
              taErradoFlorzinha,
              passeiNovosNumeros,
              contagem,
              mensagemDeDocinho })
          }
        />

        <div className="quarto-das-meninas">

          <div className="espaco-da-menina lindinha">
            <small><em>espaço para Lindinha</em></small>
            { temTarefaLindinha
              ? (
                <Lindinha
                  receberNomeDeLindinha={ this.receberNomeDeLindinha }
                  nomeInvalido={ nomeInvalido }
                />
              )
              : (
                <div>
                  <p>Lindinha se foi....</p>
                  <button
                    type="button"
                    name="lindinha"
                    onClick={ this.chamarMeninaDeVolta }
                  >
                    Chamar Lindinha de volta!
                  </button>
                </div>
              )}
          </div>

          <div className="espaco-da-menina florzinha">
            <small><em>espaço para Florzinha</em></small>
            { temTarefaFlorzinha
              ? (
                <Florzinha
                  receberTabuadaDeFlorzinha={ this.receberTabuadaDeFlorzinha }
                  numA={ numA }
                  numB={ numB }
                />
              )
              : (
                <div>
                  <p>Florzinha se foi....</p>
                  <button
                    type="button"
                    name="florzinha"
                    onClick={ this.chamarMeninaDeVolta }
                  >
                    Chamar Florzinha de volta!
                  </button>
                </div>
              )}
          </div>

          <div className="espaco-da-menina docinho">
            <small><em>espaço para Docinho</em></small>
            { temTarefaDocinho
              ? (
                <Docinho
                  contagem={ contagem }
                  contarNumeroDeDocinho={ this.contarNumeroDeDocinho }
                  ouvirDocinho={ this.ouvirDocinho }
                />
              )
              : (
                <div>
                  <p>Docinho se foi....</p>
                  <button
                    type="button"
                    name="docinho"
                    onClick={ this.chamarMeninaDeVolta }
                  >
                    Chamar Docinho de volta!
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Professor;
