export const mostrarCartaAnimal = () => {
  const divCarta = document.getElementById('carta-container');
  const cartaReverso = document.getElementById('carta-reverso');

  cartaReverso?.addEventListener('click', () => {
    cartaReverso.style.display = 'none';
    const imagenAnimal = document.createElement('img');
    imagenAnimal.classList.add('carta-anverso');
    imagenAnimal.src = 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png';
    divCarta?.appendChild(imagenAnimal);

    setTimeout(() => {
      cartaReverso.style.display = 'block';
      divCarta?.removeChild(imagenAnimal);
    }, 3000);
  });
};
