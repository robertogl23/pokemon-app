import { $ } from '../lib/dom';
import { axiosInstance } from '../services/axios.config';
import { Pokemon } from './Pokemon';

export const PokemonList = async () => {
  const template = document.createElement('ul');
  template.classList.add('grid-pokemon');

  $('#pokemon-list').innerHTML = `
    <span>cargando...</span>
  `;

  try {
    const data = await axiosInstance.get('pokemon?limit=100&offset=1');

    const listaPokemon = data.data.results;

    listaPokemon.forEach((pokemon) => {
      template.appendChild(Pokemon(pokemon));
    });
  } catch (error) {
    template.innerHTML = 'Error al cargar los pokemones';
  } finally {
    $('#pokemon-list').innerHTML = ``;
    $('#pokemon-list').appendChild(template);
  }
};
