import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Docinho.css';

class Docinho extends Component {
  shouldComponentUpdate(nextProps) {
    console.log(nextProps);
    const { contagem } = nextProps;
    if (contagem <= 10) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    const mensagem = 'Professor, eu trapaciei, só mostrei o número até o 10';
    const { funcMensagemDeDocinho } = this.props;
    funcMensagemDeDocinho(mensagem);
  }

  render() {
    const { funcParaDocinho, contagem } = this.props;
    return (
      <div className="componente-docinho meninas">
        <div className="imagem">
          <img src="/images/Docinho.png" alt="Docinho" width="100px" />
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
          <p>
            {`Quantidade de cliques: ${contagem}`}
          </p>
          <button
            type="button"
            onClick={ funcParaDocinho }
          >
            Clique
          </button>
        </div>
      </div>
    );
  }
}

export default Docinho;
