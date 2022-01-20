import Handlebars from 'handlebars';
import RenderBlock from '../../utils/RenderBlock';
import template from './index.tmpl';

class ErrorPage extends RenderBlock {
  constructor(data) {
    super(data);

    this.compiler = Handlebars.compile(template);
  }

  innerHTML(pushHistory) {
    super.innerHTML();
    super.setEventListener(pushHistory);
  }
}

export default ErrorPage;
