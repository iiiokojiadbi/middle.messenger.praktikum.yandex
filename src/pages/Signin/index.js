import Handlebars from 'handlebars';
import { signinPageTemplate } from './index.tmpl';

class SigninPage {
  constructor() {
    this.compiler = Handlebars.compile(signinPageTemplate);
  }

  compile() {
    return this.compiler();
  }
}

export default SigninPage;
