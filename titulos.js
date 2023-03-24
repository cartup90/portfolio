const posiblesTitulos = [
    "construyo experiencias digitales de impacto.",
    "diseño soluciones web a medida.",
    "transformo ideas en realidad digital."
  ];
  
  function escribirTitulo(titulo, elemento, tiempo) {  //Añade el título letra por letra
    return new Promise(resolve => {
      let indice = 0;
      elemento.textContent = "";
      const intervalo = setInterval(() => {
        if (indice < titulo.length) {
          elemento.textContent += titulo[indice];
          indice++;
        } else {
          clearInterval(intervalo);
          setTimeout(resolve, tiempo);
        }
      }, tiempo);
    });
  }
  
  async function cambiarTitulo() {
    const tituloActual = document.getElementById("titulo-dinamico").textContent;
    const indiceTitulo = posiblesTitulos.indexOf(tituloActual);
    const nuevoTitulo = posiblesTitulos[(indiceTitulo + 1) % posiblesTitulos.length];
    const tituloElemento = document.getElementById("titulo-dinamico");
    await escribirTitulo(nuevoTitulo, tituloElemento, 50);
    tituloElemento.textContent = nuevoTitulo;
  }
  
  setInterval(cambiarTitulo, 4500); // Cambia el título cada 4.5 segundos