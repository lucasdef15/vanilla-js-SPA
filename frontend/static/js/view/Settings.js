import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Settings');
  }

  async getHtml() {
    return `
      <h1>Settings</h1>
      <p>
          Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
          lorem Ipsum ut aliquet inter sapien et ullamcorper ullamcorper ullamcorper et. Lore maur accordingly.
      </p>
      
  `;
  }
}
