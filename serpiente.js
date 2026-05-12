
// 1. Capturamos el canvas y su contexto de dibujo
const canvas = document.getElementById("canvasJuego");
const ctx = canvas.getContext("2d");

const TAMANIO_CELDA = 25; 
const filas = canvas.height / TAMANIO_CELDA;
const columnas = canvas.width / TAMANIO_CELDA;


    

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

function pintarParte(lineaX, lineaY){
  const x = lineaX * TAMANIO_CELDA;
    const y = lineaY * TAMANIO_CELDA;
    const ancho = TAMANIO_CELDA;
    const alto = TAMANIO_CELDA;

    ctx.fillStyle = "#ff0000"; 
    ctx.fillRect(x, y, ancho, alto);

    ctx.strokeStyle = "#000000"; 
    
    ctx.strokeRect(x, y, ancho, alto);
}


function limpiarCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarTodo() {
  limpiarCanvas();
  dibujarTablero();
  pintarParte(5,5); 
  pintarParte(10,2);  
  pintarParte(2,23); 
  pintarParte(23,10); 
  pintarParte(0,15); 
  pintarParte(23,0);
}



