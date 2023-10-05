import React, { Component } from 'react';


interface TemporizadorState {
  tiempoRestante: number;
  tiempoInicial: number;
  contadorIniciado: boolean;
}

class EjerCicioSeis extends Component<{}, TemporizadorState> {
  private intervalo: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      tiempoRestante: 0,
      tiempoInicial: 0,
      contadorIniciado: false,
    };
  }

  iniciarTemporizador = () => {
    if (this.state.tiempoInicial > 0 && !this.state.contadorIniciado) {
      this.setState({
        tiempoRestante: this.state.tiempoInicial,
        contadorIniciado: true,
      });

      this.intervalo = setInterval(() => {
        if (this.state.tiempoRestante > 0) {
          this.setState((prevState) => ({
            tiempoRestante: prevState.tiempoRestante - 1,
          }));
        } else {
          this.detenerTemporizador();
        }
      }, 1000); // Actualiza el temporizador cada segundo (1000 ms).
    }
  };

  detenerTemporizador = () => {
    if (this.intervalo) {
      clearInterval(this.intervalo);
      this.intervalo = null;
      this.setState({
        contadorIniciado: false,
      });
    }
  };

  handleTiempoInicialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const tiempoInicial = parseInt(event.target.value, 10);
    this.setState({ tiempoInicial });
  };

  render() {
    const { tiempoRestante, contadorIniciado } = this.state;

    return (
      <div>
        <h2>Temporizador</h2>
        <label>
          Ingrese el tiempo inicial (en segundos):
          <input className='cajainput'
            type="number"
            value={this.state.tiempoInicial}
            onChange={this.handleTiempoInicialChange}
          />
        </label>
        <br />
        <br />
        
        
        <button className='button1' onClick={this.iniciarTemporizador} disabled={contadorIniciado}>
          Iniciar Temporizador
        </button>
        <br />
        <br />
        <p>
          Tiempo restante: {tiempoRestante} segundos
          {tiempoRestante === 0 && contadorIniciado && <span> - Tiempo agotado</span>}
        </p>
      </div>
    );
  }
}

export default EjerCicioSeis;

