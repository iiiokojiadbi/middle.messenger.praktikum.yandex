import Handlebars from 'handlebars';
import { pathname } from '../../utils/helpers';
import RenderBlock from '../../utils/RenderBlock';
import template from './index.tmpl';

class SignPage extends RenderBlock {
  constructor(data) {
    super(data);

    this.compiler = Handlebars.compile(template);
  }

  setEventListener(pushHistory) {
    super.setEventListener(pushHistory);

    const submit = this.root.querySelectorAll('[type="submit"]')[0];

    submit.addEventListener('click', (e) => {
      e.preventDefault();

      pushHistory(pathname, null, this.configs.submit.to);
    });
  }

  innerHTML(pushHistory) {
    super.innerHTML();
    this.setEventListener(pushHistory);
  }
}

export default SignPage;
