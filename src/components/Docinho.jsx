import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Docinho.css';

class Docinho extends Component {
  render() {
    return (
      <div className="docinho meninas">
        <h3>Docinho</h3>
        <p>Minha tarefa é clicar neste botão, mas não quero contar!!! O Professor contará para mim e eu só vou mostrar o número até 10 e terminarei minha tarefa!!</p>
        <img src="https://www.clipartmax.com/png/full/46-464381_powerpuff-girls-clipart.png" alt="Docinho" width="100px" />
      </div>
    );
  }
}

export default Docinho;
