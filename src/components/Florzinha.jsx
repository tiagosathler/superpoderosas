import React, { Component } from 'react';
import '../styles/Meninas.css';
import '../styles/Florzinha.css';

const MAX_MULTIPLICADOR = 10;

class Florzinha extends Component {
  constructor() {
    super();
    this.state = {
      numeroA: 0,
      numeroB: 0,
      resultado: '',
      taCerto: false,
    };
    this.sortearNumeros = this.sortearNumeros.bind(this);
    this.lidarComDigitacao = this.lidarComDigitacao.bind(this);
    this.testarTabuada = this.testarTabuada.bind(this);
  }

  componentDidMount() {
    this.sortearNumeros();
  }

  componentDidUpdate(prevProps) {
    const { numA, numB } = this.props;
    if (numA !== prevProps.numA || numB !== prevProps.numB) {
      this.setState({
        numeroA: numA,
        numeroB: numB,
        resultado: '',
        taCerto: false,
      });
    }
  }

  lidarComDigitacao({ target }) {
    const { numeroA, numeroB } = this.state;
    const { name, value } = target;
    const testeDaTabuada = numeroA * numeroB === Number(value);
    // console.log(numeroA, numeroB, value, testeDaTabuada);
    this.setState({
      [name]: value,
      taCerto: testeDaTabuada,
    });
  }

  sortearNumeros() {
    const numA = Math.ceil(Math.random() * MAX_MULTIPLICADOR);
    const numB = Math.ceil(Math.random() * MAX_MULTIPLICADOR);
    this.setState({
      numeroA: numA,
      numeroB: numB,
    });
  }

  testarTabuada() {
    const { numeroA, numeroB, resultado } = this.state;
    const { receberTabuadaDeFlorzinha } = this.props;
    receberTabuadaDeFlorzinha(numeroA, numeroB, resultado);
    const testeDaTabuada = numeroA * numeroB === Number(resultado);
    if (!testeDaTabuada) {
      this.forceUpdate();
    }
  }

  render() {
    // const { receberTabuada } = this.props;
    const { numeroA, numeroB, resultado, taCerto } = this.state;
    return (
      <div className="florzinha meninas">
        <h3>Florzinha</h3>
        <p>{`Me ajude a descobrir a tabuada de "${numeroA} x ${numeroB}" ?`}</p>
        <img src="https://www.clipartmax.com/png/full/3-30770_bubbles-clipart.png" alt="Florzinha" width="100px" />
        <label htmlFor="tabuada">
          Sua resposta:
          <input
            type="number"
            value={ resultado }
            name="resultado"
            onChange={ this.lidarComDigitacao }
          />
        </label>
        { !taCerto && resultado && <p>{`Humm, acho que ${resultado} está errado, professor não vai gostar...`}</p> }
        { taCerto && resultado && <p>Tá certo, pode mandar para o professor que ele vai gostar e vou embora...!</p>}
        <button
          type="button"
          onClick={ () => this.testarTabuada() }
        >
          Enviar
        </button>
      </div>
    );
  }
}

export default Florzinha;
