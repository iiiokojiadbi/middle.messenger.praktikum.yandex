import Handlebars from 'handlebars';
import { containerTemplate } from './index.tmpl';

class Container {
  constructor() {
    this.register();
  }

  register() {
    Handlebars.registerPartial('container', containerTemplate);
  }
}

export default Container;
