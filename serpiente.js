
// 1. Capturamos el canvas y su contexto de dibujo
const canvas = document.getElementById("canvasJuego");
const ctx = canvas.getContext("2d");

const TAMANIO_CELDA = 25; 
const filas = canvas.height / TAMANIO_CELDA;
const columnas = canvas.width / TAMANIO_CELDA;

const serpiente = [
  {x:12,y:11},
  {x:12,y:10},
  {x:13,y:10},
  {x:14,y:10},
  {x:15,y:10}
];


    

    // Primera pintura del juego al cargar la página
    dibujarTodo();

    // =========================
    // FUNCIONES DE DIBUJO
    // =========================


function dibujarTablero() {
    ctx.strokeStyle = "rgba(255, 255, 255, 0.18)"; 
    ctx.lineWidth = 1;

    for (let x = 0; x <= canvas.width; x += TAMANIO_CELDA) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let y = 0; y <= canvas.height; y += TAMANIO_CELDA) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

function pintarParte(lineaX, lineaY,color){
  const x = lineaX * TAMANIO_CELDA;
    const y = lineaY * TAMANIO_CELDA;

    ctx.fillStyle = color; 
    ctx.fillRect(x, y, TAMANIO_CELDA, TAMANIO_CELDA);

    ctx.strokeStyle = "#052e16"; 
    ctx.strokeRect(x, y, TAMANIO_CELDA, TAMANIO_CELDA);
}

function pintarSerpinte(){
  for (let i = 0; i < serpiente.length; i++) {
        const parte = serpiente[i];

        if (i === 0) {
            pintarParte(parte.x, parte.y, "#fbbf24"); 
        } else {
            pintarParte(parte.x, parte.y, "#e22564");
        }
    }
}

function limpiarCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarTodo() {
  limpiarCanvas();
  dibujarTablero();
  pintarSerpinte();
}

function moverDerecha() {
    const cabezaActual = serpiente[0];

    const nuevaCabeza = {
        x: cabezaActual.x + 1,
        y: cabezaActual.y
    };

    serpiente.unshift(nuevaCabeza);

    serpiente.pop(); 

    dibujarTodo();
}

function cambiarDireccion(direccion) {
  if (direccion === "derecha") {
    moverDerecha();
  }

  dibujarTodo();
}