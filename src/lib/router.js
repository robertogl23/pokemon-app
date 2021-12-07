import { ItemPath, newItem } from '../components/ItemPath';
import { PokemonList } from '../components/PokemonList,';
import { $ } from './dom';

const page = $('#page');
export const newPath = $('#newPath');

export const getParamUrl = () => window.location.hash.replace(/#/g, '');

export const startRouter = async () => {


  const param_value = getParamUrl();
  if (param_value) {
    page.setAttribute('name', `pakemon-${param_value}`);
    newPath.classList.remove('hidden');
    $('#idPokemon').innerHTML = param_value;
    // $('.grid-pokemon')?.classList.add('hidden');
    return;
  }
  await PokemonList();

};

export const hashChange = async () => {
  const param_value = getParamUrl();
  console.log(newPath);
  if (param_value) {
    page.setAttribute('name', `pakemon-${param_value}`);
    return;
  }
  newPath.classList.add('hidden');
  page.setAttribute('name', `pakemon-home`);
  $('.grid-pokemon')?.classList.remove('hidden');
  $('#pokemon-list')?.classList.remove('fade-out');
  await PokemonList();


};
