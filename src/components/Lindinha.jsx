import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Lindinha.css';

class Lindinha extends Component {
  render() {
    return (
      <div className="componente-lindinha meninas">
        <div className="imagem">
          <img src="/images/Lindinha.png" width="100px" alt="Lindinha" />
        </div>
        <div className="tarefa">
          <h3>Lindinha</h3>
          <p>Oi tudo bem? Minha tarefa é passar seu nome para o professor</p>
        </div>
      </div>
    );
  }
}

export default Lindinha;
