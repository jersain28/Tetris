document.addEventListener('DOMContentLoaded', function () {
    reproducirMusica();
});

function reproducirMusica() {
    const rutaMusica = 'Musica/UEFA Champions League Official Theme Song.mp3';
    const audio = new Audio(rutaMusica);
    audio.loop = true;
    audio.play();
}
