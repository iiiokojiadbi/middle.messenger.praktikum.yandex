import Handlebars from 'handlebars';
import Partials from '../../components/Partials';
import { signPageTemplate } from './index.tmpl';

class SignPage extends Partials {
  constructor() {
    super();
    this.compiler = Handlebars.compile(signPageTemplate);
  }

  compile(config) {
    return this.compiler(config);
  }
}

export default SignPage;
