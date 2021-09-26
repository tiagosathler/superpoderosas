import React from 'react';
import Docinho from '../components/Docinho';
import Florzinha from '../components/Florzinha';
import Lindinha from '../components/Lindinha';
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
        <div className="espaco-do-professor">
          <div>
            <img src="https://www.clipartmax.com/png/full/159-1595855_%C2%A0-powerpuff-girls-professor-utonium.png" alt="Professor" width="100px" />
          </div>
          <div>
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
            { !taErradoFlorzinha && tabuada > 0 && <h4>{`A Florzinha resolveu a tabuada de "${numA} x ${numB} = ${tabuada}"!`}</h4> }
            { taErradoFlorzinha && tabuada && <p>{`Tá errado Florzinha! Tabuada de "${numAAnt} x ${numBAnt}" não é "${tabuada}"!`}</p> }
            { taErradoFlorzinha && passeiNovosNumeros && <p>{`Passei outros números da tabuada (${numA} x ${numB}) para Florzinha, vamos ver se ela sabe agora...`}</p> }

            {/* Renderiza resultados de Docinho */}
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
                  receberNomeDeLindinha={ this.receberNomeDeLindinha }
                  nomeInvalido={ nomeInvalido }
                />
              )
              : <p>Lindinha se foi...</p> }
          </div>

          <div className="espaco-da-menina">
            <small><em>espaço para Florzinha</em></small>
            { temTarefaFlorzinha
              ? (
                <Florzinha
                  receberTabuadaDeFlorzinha={ this.receberTabuadaDeFlorzinha }
                  numA={ numA }
                  numB={ numB }
                />
              )
              : <p>Florzinha se foi...</p> }
          </div>

          <div className="espaco-da-menina">
            <small><em>espaço para Docinho</em></small>
            { temTarefaDocinho
              ? (
                <Docinho
                  contagem={ contagem }
                  contarNumeroDeDocinho={ this.contarNumeroDeDocinho }
                  ouvirDocinho={ this.ouvirDocinho }
                />
              )
              : <p>Docinho se foi....</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Professor;
