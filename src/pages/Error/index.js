import Handlebars from 'handlebars';
import { pathname } from '../../utils/helpers';
import RenderBlock from '../../utils/RenderBlock';
import { errorPageTemplate } from './index.tmpl';

class ErrorPage extends RenderBlock {
  constructor(data) {
    super(data);

    this.compiler = Handlebars.compile(errorPageTemplate);
  }

  innerHTML(pushHistory) {
    super.innerHTML();
    super.setEventListener(pushHistory);
  }
}

export default ErrorPage;
