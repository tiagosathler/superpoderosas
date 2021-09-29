import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Florzinha.css';

class Florzinha extends Component {
  constructor() {
    super();

    this.state = {
      numA: 0,
      numB: 0,
      // resposta: 0, // assim nput começará com 0
      resposta: '', // assim nput começará vazio (apesar de ser do tipo número, não dá erro)
      taCerto: false,
    };
    this.sortearNumeros = this.sortearNumeros.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() { // executado apenas 1 vez (por isso ideal para chamada API)
    this.sortearNumeros();
  }

  handleChange(event) {
    const { target } = event;
    const { value } = target;
    const { numA, numB } = this.state;
    const taCerto = (Number(value) === numA * numB); // condicional, retorna true ou false
    this.setState({
      resposta: value,
      taCerto,
    });
  }

  sortearNumeros() {
    const numA = Math.ceil(Math.random() * 10); // Math.ceil sempre arredonda pra cima
    const numB = Math.ceil(Math.random() * 10);

    this.setState({ // lint não aceita setState no didMount
      numA,
      numB,
    });
  }

  // testarTabuada() {
  //   const { numA, numB, resposta } = this.state;
  //   if (Number(resposta) === numA * numB) {
  //     return true;
  //   }
  // }

  render() {
    const { numA, numB, resposta, taCerto } = this.state;
    const { mandarResposta } = this.props;
    return (
      <div className="componente-florzinha meninas">
        <div className="imagem">
          <img src="/images/Florzinha.png" alt="Florzinha" width="100px" />
        </div>
        <div className="tarefa">
          <h3>Florzinha</h3>
          <p>Me ajude a calcular uma conta</p>
          <p>{ `Me ajude a descobrir a tabuada de ${numA} x ${numB}` }</p>
          <label htmlFor="inputFlor">
            Sua resposta:
            <input
              type="number" // input não checa se é number
              id="inputFlor"
              onChange={ this.handleChange }
              value={ resposta }
            />
          </label>
          <button
            type="button"
            onClick={ () => mandarResposta(numA, numB, resposta) }
          >
            Enviar
          </button>
          <p>{ !taCerto && resposta && `Eu acho que ${numA} x ${numB} é diferente de ${resposta}`}</p>
        </div>
      </div>
    );
  }
}

export default Florzinha;
