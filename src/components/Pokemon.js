import { $ } from '../lib/dom';
import { ItemPath, newItem } from './ItemPath';

export const Pokemon = ({ name, url }) => {
  const pokemonId = url.split('/')[url.split('/').length - 2];
  const figureElement = document.createElement('li');

  figureElement.addEventListener('click', () => {
    newPath.classList.remove('hidden');
    $('#idPokemon').innerHTML = pokemonId;
    $('#pokemon-list').classList.add('fade-out');
    $('.grid-pokemon').innerHTML = '';
    history.pushState(null,`${name}`,`#${pokemonId}`);
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
