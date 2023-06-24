import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');
  }

  async getHtml() {
    return `
      <h1>Posts</h1>
      <p>
          lorem ipsum dolor sit amet, consectetur adip e ea commodo sed do eiusmod tempor incididunt ut
      </p>
      
  `;
  }
}
