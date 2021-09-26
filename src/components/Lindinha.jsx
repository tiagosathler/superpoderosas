import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Lindinha.css';

class Lindinha extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
    };

    this.lidarComDigitacao = this.lidarComDigitacao.bind(this);
  }

  lidarComDigitacao({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { receberNomeDeLindinha } = this.props;
    const { nome } = this.state;
    return (
      <div className="componente-lindinha meninas">
        <div className="imagem">
          <img src="https://www.clipartmax.com/png/full/46-462876_girl-watching-tv-clipart.png" width="100px" alt="Lindinha" />
        </div>
        <div className="tarefa">
          <h3>Lindinha</h3>
          <p>Oi tudo bem? Minha tarefa é passar seu nome para o professor</p>
          <label htmlFor="input-nome">
            Qual seu nome?
            <input
              id="input-nome"
              type="text"
              value={ nome }
              name="nome"
              onChange={ this.lidarComDigitacao }
            />
          </label>
          <button
            type="button"
            onClick={ () => receberNomeDeLindinha(nome) }
          >
            Enviar
          </button>
        </div>

      </div>
    );
  }
}

export default Lindinha;
