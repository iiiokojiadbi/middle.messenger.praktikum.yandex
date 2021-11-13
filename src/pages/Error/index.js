import Handlebars from 'handlebars';
import { errorPageTemplate } from './index.tmpl';

class ErrorPage {
  constructor() {
    this.compiler = Handlebars.compile(errorPageTemplate);
  }

  compile(config) {
    return this.compiler(config);
  }
}

export default ErrorPage;
