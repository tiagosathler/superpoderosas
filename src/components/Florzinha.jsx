import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Florzinha.css';

class Florzinha extends Component {
  constructor() {
    super();

    this.state = {
      numA: 0,
      numB: 0,
      resposta: '',
      taCerto: false,
    };
    this.sorterNumeros = this.sorterNumeros.bind(this);
    this.lidarComDigitacao = this.lidarComDigitacao.bind(this);
  }

  componentDidMount() {
    this.sorterNumeros();
  }

  sorterNumeros() {
    const numA = Math.ceil(Math.random() * 10);
    const numB = Math.ceil(Math.random() * 10);
    this.setState({
      numA,
      numB,
    });
  }

  lidarComDigitacao(event) {
    const { target } = event;
    const { value } = target;
    const { numA, numB } = this.state;
    const taCerto = (Number(value) === numA * numB);
    console.log(taCerto);
    this.setState({
      resposta: value,
      taCerto,
    });
  }

  // testarTabuada() {
  //   const { numA, numB, resposta } = this.state;
  //   if  {
  //     return true;
  //   } else {
  //    return false;
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
          <p>{`Me ajude a descobrir a tabuada de "${numA} x ${numB}" ?`}</p>
          <label htmlFor="inputFlor">
            Sua resposta:
            <input
              id="inputFlor"
              type="number"
              value={ resposta }
              onChange={ this.lidarComDigitacao }
            />
          </label>
          <button
            type="button"
            onClick={ () => mandarResposta(numA, numB, resposta) }
          >
            Enviar
          </button>
          <p>{ !taCerto && resposta && `Eu acho que que ${numA} x ${numB} é diferente de ${resposta}`}</p>

        </div>
      </div>
    );
  }
}

export default Florzinha;
