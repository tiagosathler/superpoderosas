import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Docinho.css';

class Docinho extends Component {
  render() {
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
        </div>
      </div>
    );
  }
}

export default Docinho;
