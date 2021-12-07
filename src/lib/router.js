import { PokemonList } from '../components/PokemonList,';
import { $ } from './dom';

const page = $('#page');

export const getParamUrl = () => window.location.hash.replace(/#/g, '');

export const startRouter = async () => {


  const param_value = getParamUrl();
  if (param_value) {
    page.setAttribute('name', `pakemon-${param_value}`);
    page.innerHTML = ``;
    return;
  }
  await PokemonList();

};

export const hashChange = async () => {
  const param_value = getParamUrl();

  console.log(param_value);
  if (param_value) {
    page.setAttribute('name', `pakemon-${param_value}`);
    $('.grid-pokemon').classList.add('hidden');
    return;
  }

  page.setAttribute('name', `pakemon-home`);
  $('.grid-pokemon').classList.remove('hidden');



};
