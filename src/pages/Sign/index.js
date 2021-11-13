import Handlebars from 'handlebars';
import { signPageTemplate } from './index.tmpl';

class SignPage {
  constructor() {
    this.compiler = Handlebars.compile(signPageTemplate);
  }

  compile(config) {
    return this.compiler(config);
  }
}

export default SignPage;
