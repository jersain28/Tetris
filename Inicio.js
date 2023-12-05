// Inicio.js

function iniciarJuego() {
    // Lógica de inicio del juego
    setup();  // Llama a la función setup para inicializar el juego

    // Muestra un mensaje de alerta
    alert('¡Juego iniciado!');

    // Inicia la caída de las piezas
    setInterval(() => {
        draw();
    }, 500);  // Ajusta el tiempo de caída de las piezas según sea necesario
}

function pausarJuego() {
    // Aquí puedes agregar la lógica para pausar el juego
    alert('¡Juego pausado!');
    // Puedes detener la caída de las piezas, pausar la música, etc.
}

// Inicio.js

let juegoEnPausa = false;

function pausarJuego() {
    juegoEnPausa = !juegoEnPausa;
    if (juegoEnPausa) {
        alert('¡Juego pausado!');
    }
}
