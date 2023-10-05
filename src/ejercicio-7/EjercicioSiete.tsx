import React, { Component } from 'react';
import './EjercicioSiete.css'

class EjercicioSiete extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      display: '0',
      resultado: '',
      operador: null,
      numeroAnterior: '',
    };
  }

  agregarDigito = (digito: string) => {
    const { display, resultado, operador } = this.state;

    if (resultado !== '') {
      this.setState({
        display: digito,
        resultado: '',
      });
    } else {
      this.setState((prevState) => ({
        display: prevState.display === '0' ? digito : prevState.display + digito,
      }));
    }
  };

  agregarOperador = (op: string) => {
    const { display, resultado, operador, numeroAnterior } = this.state;

    if (numeroAnterior === '') {
      this.setState({
        operador: op,
        numeroAnterior: display,
        display: '0',
      });
    } else if (operador) {
      this.calcularResultado();
      this.setState({
        operador: op,
        numeroAnterior: resultado,
        display: '0',
        resultado: '',
      });
    }
  };

  calcularResultado = () => {
    const { display, operador, numeroAnterior } = this.state;

    if (numeroAnterior && operador) {
      const num1 = parseFloat(numeroAnterior);
      const num2 = parseFloat(display);
      let nuevoResultado;

      switch (operador) {
        case '+':
          nuevoResultado = num1 + num2;
          break;
        case '-':
          nuevoResultado = num1 - num2;
          break;
        case '*':
          nuevoResultado = num1 * num2;
          break;
        case '/':
          nuevoResultado = num1 / num2;
          break;
        default:
          return;
      }

      this.setState({
        resultado: nuevoResultado.toString(),
        display: nuevoResultado.toString(),
        operador: null,
        numeroAnterior: '',
      });
    }
  };

  borrarTodo = () => {
    this.setState({
      display: '0',
      resultado: '',
      operador: null,
      numeroAnterior: '',
    });
  };

  render() {
    const { display } = this.state;

    return (
      <div className="calculadora">
        <div className="display">{display}</div>
        <div className="botones">
          <button onClick={() => this.agregarDigito('1')}>1</button>
          <button onClick={() => this.agregarDigito('2')}>2</button>
          <button onClick={() => this.agregarDigito('3')}>3</button>
          <button onClick={() => this.agregarOperador('+')}>+</button>
          <button onClick={() => this.agregarDigito('4')}>4</button>
          <button onClick={() => this.agregarDigito('5')}>5</button>
          <button onClick={() => this.agregarDigito('6')}>6</button>
          <button onClick={() => this.agregarOperador('-')}>-</button>
          <button onClick={() => this.agregarDigito('7')}>7</button>
          <button onClick={() => this.agregarDigito('8')}>8</button>
          <button onClick={() => this.agregarDigito('9')}>9</button>
          <button onClick={() => this.agregarOperador('*')}>*</button>
          <button onClick={() => this.agregarDigito('0')}>0</button>
          <button onClick={this.calcularResultado}>=</button>
          <button onClick={() => this.agregarOperador('/')}>/</button>
          <button onClick={this.borrarTodo}>C</button>
        </div>
      </div>
    );
  }
}

export default EjercicioSiete;
