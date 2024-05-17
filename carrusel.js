const imagenes = [
  "img/foto1.jpg",
  "img/foto2.jpg",
  "img/foto3.jpg",
  "img/foto4.jpg",
  "img/foto5.jpg",
  "img/foto6.jpg",
];

let imagenIndex = Math.floor(imagenes.length / 2);

function mostrarImagenes() {
  const carruselImagenes = document.querySelectorAll(".carrusel-image");

  // Iterar sobre las img y actualizar su src
  carruselImagenes.forEach((imagen, index) => {
    // Calcular indice de la img
    const displayIndex =
      (imagenIndex +
        index -
        Math.floor(carruselImagenes.length / 2) +
        imagenes.length) %
      imagenes.length;
    imagen.src = imagenes[displayIndex];
  });
}

function siguienteImagen() {
  imagenIndex = (imagenIndex + 1) % imagenes.length;
  mostrarImagenes();
}

function anteriorImagen() {
  imagenIndex = (imagenIndex - 1 + imagenes.length) % imagenes.length;
  mostrarImagenes();
}

// Muestra las imágenes
mostrarImagenes();

// Agregar listeners a los botones de siguiente y anterior
document
  .getElementById("boton-siguiente")
  .addEventListener("click", siguienteImagen);
document
  .getElementById("boton-anterior")
  .addEventListener("click", anteriorImagen);
