const miJuego = (() => {
  "use strict";

  let tipoCartas = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"],
    deck = [];

  let puntosJugadores = [];

  //referencias html
  const btnNuevo = document.querySelector("#btnNuevo"),
    btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener");

  const divCartasJugadores = document.querySelectorAll(".divCartas");
  const puntosHtml = document.querySelectorAll("small");

  const inicializarJuego = (numeroJugadores = 2) => {
    deck = crearCartas();

    puntosJugadores = [];
    for (let i = 0; i < numeroJugadores; i++) {
      puntosJugadores.push(0);
    }

    puntosHtml.forEach((item) => (item.innerText = "0"));
    divCartasJugadores.forEach((item) => (item.innerText = ""));
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  // permite tener todas las cartas del juego
  const crearCartas = () => {
    deck = [];

    for (let i = 2; i <= 10; i++) {
      tipoCartas.forEach((x) => {
        deck.push(i + x);
      });
    }

    tipoCartas.forEach((tipo) => {
      especiales.forEach((esp) => {
        deck.push(esp + tipo);
      });
    });

    return _.shuffle(deck);
  };

  // turno: 0 => jugador, 1 => computador
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHtml[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  // muestra la carta en el DOM
  const mostrarCarta = (carta, turno) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
  };

  // determina el ganador del juego
  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores; // desustruracion de array

    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie Gano ");
      } else if (puntosMinimos > 21) {
        alert("Gano la Computadora ");
      } else if (puntosComputadora > 21) {
        alert("Gano el Jugador ");
      } else if (puntosComputadora > puntosMinimos) {
        alert("Gano la Computadora ");
      } else if (puntosComputadora < puntosMinimos) {
        alert("Gano el Jugador");
      }
    }, 500);
  };

  // selecciona las cartas para el computador
  const turnoCOmputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      let carta = pedirCarta();
      puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
      mostrarCarta(carta, puntosJugadores.length - 1);

      if (puntosMinimos > 21) break;
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };

  const pedirCarta = () => {
    if (deck.length > 0) {
      let num = Math.floor(Math.random() * (deck.length - 1)) + 1;
      deck.splice(num, 1);
      return deck[num];
    }
    return "no hay cartas";
  };

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };

  // Eventos
  btnPedir.addEventListener("click", () => {
    let carta = pedirCarta();

    let puntosJugador = acumularPuntos(carta, 0);
    mostrarCarta(carta, 0);

    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoCOmputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      turnoCOmputadora(puntosJugador);
      btnDetener.disabled = true;
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoCOmputadora(puntosJugadores[0]);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
