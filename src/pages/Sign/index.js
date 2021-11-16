import Handlebars from 'handlebars';
import { pathname } from '../../utils/helpers';
import RenderBlock from '../../utils/RenderBlock';
import { signPageTemplate } from './index.tmpl';

class SignPage extends RenderBlock {
  constructor(data) {
    super(data);

    this.compiler = Handlebars.compile(signPageTemplate);
  }

  innerHTML(pushHistory) {
    super.innerHTML();
    super.setEventListener(pushHistory);
  }
}

export default SignPage;
