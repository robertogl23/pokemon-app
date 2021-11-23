import { $ } from '../lib/dom';

export const Pokemon = ({ name, url }) => {
  const pokemonId = url.split('/')[url.split('/').length - 2];
  const figureElement = document.createElement('li');


  figureElement.addEventListener('click', () => {
    window.location.hash = `#${pokemonId}`;
  });

  figureElement.innerHTML = `
  <figure>
    <header >
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png"
        alt="${name}"
        loading="lazy">
    </header>
    <footer>
      <figcaption>${name}</figcaption>
    </footer>
  </figure>
  `;

  return figureElement;
};
