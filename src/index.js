import './css/styles.css';
import './css/header.css';
import './css/grid-pokemon.css';
import { $, $$ } from './lib/dom';
import { axiosInstance } from './services/axios.config';
import { Pokemon } from './components/Pokemon';


const getParamUrl = () => window.location.hash.replace(/#/g, '');

const param_value = getParamUrl();

document.addEventListener('DOMContentLoaded', async () => {
  if (param_value) {
    $('#page').setAttribute("name",`pakemon-${param_value}`);
    $('.grid-pokemon').hidden = true;
    console.log(window.location.hash)
    return;
  }
  const data = await axiosInstance.get('pokemon?limit=100&offset=1');

  const listaPokemon = data.data.results;

  listaPokemon.forEach((pokemon) => {
    $('.grid-pokemon').appendChild(Pokemon(pokemon));
  });

  window.addEventListener('hashchange', () => {
    $('#page').setAttribute("name",`pakemon-${getParamUrl()}`);
    $('.grid-pokemon').classList.add('hidden');

    console.log(getParamUrl());
  })
  console.log(data);
});
