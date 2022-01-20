import Handlebars from 'handlebars';
import template from './index.tmpl';

class Redirect {
  constructor() {
    this.register();
  }

  register() {
    Handlebars.registerPartial('redirect', template);
  }
}

export default Redirect;
