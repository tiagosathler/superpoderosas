import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Docinho.css';

class Docinho extends Component {
  shouldComponentUpdate(nextProps) { // tb poderia fazer condicional no <p> quantidade de cliques
    console.log(nextProps);
    const { contagem } = nextProps; // nextProps seria o this props que virá, recebe as props do componente
    if (contagem <= 10) {
      return true; // qdo true renderiza
    }
    return false; // qdo false ele sai do ciclo de vida (vai pro x e não renderiza)
  }

  componentWillUnmount() {
    const mensagem = 'Professor, eu trapaceei, só mostrei até o número 10!';
    const { funcMensagemDeDocinho } = this.props; // passar msg de filho pro pai
    funcMensagemDeDocinho(mensagem); // será executado no professor
  }

  render() {
    const { funcParaDocinho, contagem } = this.props;
    // docinho renderiza não pq mudou o estado (ela não tem estado), mas pq recebeu uma new props do professor
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
          <p>{ `Quantidade de cliques: ${contagem}` }</p>
          <button
            type="button"
            onClick={ () => funcParaDocinho() } // { funcParaDocinho } tb funcionou (sem executar a func)
          >
            Enviar
          </button>
        </div>
      </div>
    );
  }
}

export default Docinho;
