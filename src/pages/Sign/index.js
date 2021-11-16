import Handlebars from 'handlebars';
import { ROUTE } from '../../constants/route';
import { pathname } from '../../utils/helpers';
import RenderBlock from '../../utils/RenderBlock';
import { signPageTemplate } from './index.tmpl';

class SignPage extends RenderBlock {
  constructor(data) {
    super(data);

    this.compiler = Handlebars.compile(signPageTemplate);
  }

  setEventListener(pushHistory) {
    super.setEventListener(pushHistory);

    const submit = this.root.querySelectorAll('[type="submit"]')[0];

    submit.addEventListener('click', (e) => {
      e.preventDefault();

      pushHistory(pathname, null, this.config.submit.to);
    });
  }

  innerHTML(pushHistory) {
    super.innerHTML();
    this.setEventListener(pushHistory);
  }
}

export default SignPage;
