import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Docinho.css';

const MAX_NUMERO_QUE_CONTO = 10;

class Docinho extends Component {
  shouldComponentUpdate(nextProps) {
    const { contagem } = nextProps;
    return contagem <= MAX_NUMERO_QUE_CONTO;
  }

  componentWillUnmount() {
    const { ouvirDocinho } = this.props;
    ouvirDocinho('Desculpe Professor, trapaciei...');
  }

  render() {
    const { contagem, contarNumeroDeDocinho } = this.props;
    return (
      <div className="docinho meninas">
        <h3>Docinho</h3>
        <p>
          Minha tarefa é clicar neste botão, mas não quero contar!!!
          O Professor contará para mim.
        </p>
        <p>
          <em>
            (Segredinho nosso, eu só vou mostrar até o número 10 kkk)!
          </em>

        </p>

        <h3>{ contagem }</h3>
        <img
          src="https://www.clipartmax.com/png/full/46-464381_powerpuff-girls-clipart.png"
          alt="Docinho"
          width="100px"
        />
        <button
          id="botao-docinho"
          type="button"
          onClick={ contarNumeroDeDocinho }
        >
          Contar
        </button>
      </div>
    );
  }
}

export default Docinho;
