function mostrarImagen(imagenUrl) {
    var contenedorImagen = document.getElementById('contenedorImagen');
    contenedorImagen.innerHTML = '';

    var imagen = document.createElement('img');
    imagen.src = imagenUrl;
    imagen.alt = 'Imagen';

    contenedorImagen.appendChild(imagen);
}

document.addEventListener('DOMContentLoaded', function() {
    var boton1 = document.getElementById('boton1');
    var boton2 = document.getElementById('boton2');
    var boton3 = document.getElementById('boton3');

    boton1.addEventListener('click', function() {
        mostrarImagen(src="https://i.pinimg.com/originals/2b/65/39/2b65399090ad288fffe76ca66e765538.png");
    });

    boton2.addEventListener('click', function() {
        mostrarImagen(src="https://i.pinimg.com/736x/96/b9/d8/96b9d8a486ea6d30668de4b8a3c04d11.jpg");
    });

    boton3.addEventListener('click', function() {
        mostrarImagen(src="https://i.pinimg.com/originals/a2/9e/69/a29e699f55ea1837086101bcc698f77d.png");
    });
});