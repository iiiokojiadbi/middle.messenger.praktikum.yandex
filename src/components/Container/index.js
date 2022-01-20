import Handlebars from 'handlebars';
import template from './index.tmpl';

class Container {
  constructor() {
    this.register();
  }

  register() {
    Handlebars.registerPartial('container', template);
  }
}

export default Container;
