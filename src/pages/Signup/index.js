import Handlebars from 'handlebars';
import { signupPageTemplate } from './index.tmpl';

class SignupPage {
  constructor() {
    this.compiler = Handlebars.compile(signupPageTemplate);
  }

  compile() {
    return this.compiler();
  }
}

export default SignupPage;
