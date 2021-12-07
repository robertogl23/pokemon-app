import { getParamUrl } from "../lib/router";

class HomeItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.addEventListener('click', this.onclick);
  }

  onclick() {
    if(!getParamUrl()) return
    history.back('/');
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host span {
          font-family: var(--font-sans);
          font-size: var(--font-size-fluid-1);
          font-weight: var(--font-weight-7);
          color: var(--color-text-1);
          cursor: pointer;
        }
      </style>
      <li>
        <span>Inicio</span>
      </li>
    `;
  }
}

export const newItem = (id) => {
  const span = document.createElement('span');

  span.innerText = id;

  newPath.appendChild(span);

}


customElements.define('home-item', HomeItem);


