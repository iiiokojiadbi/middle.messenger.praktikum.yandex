import Container from '../components/Container';
import Redirect from '../components/Redirect';
import { pathname } from './helpers';

class RenderBlock {
  constructor({ root, configs }) {
    this.root = root;
    this.configs = configs;
    this.content = null;

    new Container();
    new Redirect();
  }

  compile() {
    this.content = this.compiler(this.configs);
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
