import Container from '../components/Container';
import Redirect from '../components/Redirect';
import { pathname } from './helpers';

class RenderBlock {
  constructor({ root, config }) {
    this.root = root;
    this.config = config;
    this.content = null;

    new Container();
    new Redirect();
  }

  compile() {
    this.content = this.compiler(this.config);
    return this;
  }

  setEventListener(pushHistory) {
    const link = this.root.querySelectorAll('a');

    link.forEach((elem) =>
      elem.addEventListener('click', (e) => {
        e.preventDefault();

        const to = e.target.dataset.link;

        pushHistory(pathname, null, to);
      })
    );
  }

  innerHTML() {
    this.root.innerHTML = this.content;
  }
}

export default RenderBlock;
