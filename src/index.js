import 'transition-style';
import './css/styles.css';
import './css/header.css';
import './css/grid-pokemon.css';
import './css/path-app.css';
import { hashChange, startRouter } from './lib/router';

document.addEventListener('DOMContentLoaded', async () => {
  startRouter();
  window.addEventListener('hashchange', hashChange)
});
