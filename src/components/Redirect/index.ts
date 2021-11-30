import Handlebars from 'handlebars';
import { redirectTemplate } from './index.tmpl';

class Redirect {
  constructor() {
    this.register();
  }

  register() {
    Handlebars.registerPartial('redirect', redirectTemplate);
  }
}

export default Redirect;
