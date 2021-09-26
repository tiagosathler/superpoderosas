import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Florzinha.css';

class Florzinha extends Component {
  render() {
    return (
      <div className="componente-florzinha meninas">
        <div className="imagem">
          <img src="/images/Florzinha.png" alt="Florzinha" width="100px" />
        </div>
        <div className="tarefa">
          <h3>Florzinha</h3>
          <p>Me ajude a calcular uma conta</p>
        </div>
      </div>
    );
  }
}

export default Florzinha;
