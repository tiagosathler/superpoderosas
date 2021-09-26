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
      <div className="componente-docinho meninas">
        <div className="imagem">
          <img
            src="/images/Docinho.png"
            alt="Docinho"
            width="100px"
          />
        </div>
        <div className="tarefa">
          <h3>Docinho</h3>
          <p>
            Minha tarefa é clicar neste botão, mas não quero contar!!!
            O Professor contará para mim.
          </p>
          <p>
            <em>
              (Segredinho: eu só vou mostrar até o número 10 kkk)!
            </em>

          </p>

          <h3>{ contagem }</h3>
          <button
            id="botao-docinho"
            type="button"
            onClick={ contarNumeroDeDocinho }
          >
            Contar
          </button>
        </div>
      </div>
    );
  }
}

export default Docinho;
