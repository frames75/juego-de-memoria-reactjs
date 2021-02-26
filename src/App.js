import React, { Component } from 'react';
import Header from './Header';
import Tablero from './Tablero';
import Footer from './Footer';
import './App.css';
import construirBaraja from './utils/construirBaraja';

const getEstadoInicial = () => {
  const baraja = construirBaraja();
  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false,
    numeroDeIntentos: 0,
    tiempo: 1000
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getEstadoInicial();

    this.handleChangeTiempo = this.handleChangeTiempo.bind(this);
  }

  render() {
    return (
      <div className="application">
        <Header 
          numeroDeIntentos={this.state.numeroDeIntentos}
          resetearPartida={() => this.resetearPartida()}
          handleChangeTiempo={this.handleChangeTiempo}
          value={this.state.tiempo}
        />
        <Tablero 
          baraja={this.state.baraja}
          parejaSeleccionada={this.state.parejaSeleccionada}
          seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
        />
        <Footer />
      </div>
    );
  }

  seleccionarCarta(carta) {
    if (
      this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.fueAdivinada
    ) {
      return;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada
    });

    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  }

  compararPareja(parejaSeleccionada) {
    this.setState({estaComparando: true});

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.state.baraja;

      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }

          return {...carta, fueAdivinada: true};
        });
      }

      this.verificarSiHayGanador(baraja);
      this.setState({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false,
        numeroDeIntentos: this.state.numeroDeIntentos + 1
      })
    }, this.state.tiempo)
  }

  verificarSiHayGanador(baraja) {
    if (
      baraja.filter((carta) => !carta.fueAdivinada).length === 0
    ) {
      alert(`Terminaste en ${this.state.numeroDeIntentos} intentos!`);
    }
  }

  handleChangeTiempo(e) {
    this.setState({
      tiempo: e.target.value
    });
  }

  resetearPartida() {
    // this.setState(
    //   getEstadoInicial()
    // );

    // Antes de barajar, ocultar todas las parejas encontradas.
    let baraja = this.state.baraja;
    baraja = baraja.map((carta) => {
      return {...carta, fueAdivinada: false};
    });

    this.setState({
      baraja: baraja
    });

    // Dar tiempo a que giren las cartas para ocultarse antes de barajar.
    setTimeout(() => {
      this.setState(
        getEstadoInicial()
      );
    }, 500);
  }
}

export default App;
