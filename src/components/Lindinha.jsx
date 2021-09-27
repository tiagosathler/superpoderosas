import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Lindinha.css';

class Lindinha extends Component {
  constructor() {
    super();
    this.state = {
      visitante: '',
    };

    this.lidarComInput = this.lidarComInput.bind(this);
  }

  lidarComInput(event) {
    const { target } = event;
    const { value } = target;
    console.log(target);
    this.setState({
      visitante: value,
    });
  }

  render() {
    const { visitante } = this.state;
    const { funcParaLindinha } = this.props;
    return (
      <div className="componente-lindinha meninas">
        <div className="imagem">
          <img src="/images/Lindinha.png" width="100px" alt="Lindinha" />
        </div>
        <div className="tarefa">
          <h3>Lindinha</h3>
          <p>Oi tudo bem? Minha tarefa é passar seu nome para o professor</p>
          <p>{ visitante }</p>
          <label htmlFor="nome-do-visitante">
            Escreva seu nome:
            <input
              id="nome-do-visitante"
              type="text"
              value={ visitante }
              name="visitante"
              onChange={ this.lidarComInput }
            />
          </label>
          <button
            type="button"
            onClick={ () => funcParaLindinha(visitante) }
          >
            Enviar
          </button>
        </div>
      </div>
    );
  }
}

export default Lindinha;
