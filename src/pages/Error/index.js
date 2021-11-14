import Handlebars from 'handlebars';
import Partials from '../../components/Partials';
import { errorPageTemplate } from './index.tmpl';

class ErrorPage extends Partials {
  constructor() {
    super();
    this.compiler = Handlebars.compile(errorPageTemplate);
  }

  compile(config) {
    return this.compiler(config);
  }
}

export default ErrorPage;
