var MINIMUM_LOADING_TIME = 1800; // tiempo mínimo que se debe mostrar el loader (en milisegundos)

window.onload = function() {
    let loader = document.getElementById("loader");
    let cabecera = document.querySelector(".cabecera");
    let main = document.querySelector(".main");
    let contacto = document.querySelector(".contacto");
  
    // Establece un temporizador para ocultar el loader después del tiempo mínimo
    setTimeout(function() {
      loader.style.display = "none";
      cabecera.style.display="flex";
      main.style.display="flex";
      contacto.style.display="flex";
      document.body.classList.remove("loading"); // Elimina la clase 'loading' para mostrar el contenido del body
    }, MINIMUM_LOADING_TIME);
  }

