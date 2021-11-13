import Handlebars from 'handlebars';
import { errorPageTemplate } from './index.tmpl.js';

class ErrorPage {
  constructor() {
    this.compiler = Handlebars.compile(errorPageTemplate);
  }

  compile(config) {
    return this.compiler(config);
  }
}

export default ErrorPage;
