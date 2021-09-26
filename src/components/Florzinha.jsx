import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Florzinha.css';

export class Florzinha extends Component {
  render() {
    return (
      <div className="florzinha meninas">
        <h3>Florzinha</h3>
        <p>
          Hey! Minha tarefa é calcular o que o Professor passar para mim,
          já que sou muito inteligente
        </p>
        <img src="https://www.clipartmax.com/png/full/3-30770_bubbles-clipart.png" alt="Florzinha" width="100px" />

      </div>
    );
  }
}

export default Florzinha;
