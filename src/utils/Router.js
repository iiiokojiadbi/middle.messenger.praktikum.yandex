import { ROUTE } from '../constants/route';
import { pathname } from './helpers';

class Router {
  constructor(pages) {
    this.pages = pages;
    this.init();
  }

  redirect = (...args) => {
    this.pushHistory(...args);
  };

  pushHistory = (state, props, to, skip = false) => {
    history.pushState(state, props, to);

    if (!skip) {
      this.historyEventHandler(state, props, to);
    }
  };

  init = () => {
    window.onpopstate = history.onpushstate = this.historyEventHandler;
  };

  checkValidUrl = (url) => {
    return Object.values(ROUTE).some((path) => path === url);
  };

  historyEventHandler = (state, props, redirect) => {
    let link = redirect;

    if (['', '/'].includes(link)) {
      link = ROUTE.CHAT;
    }

    if (!this.checkValidUrl(link)) {
      link = ROUTE.NOT_FOUND;
    }

    const page = this.pages[link];

    try {
      page.compile().innerHTML(this.pushHistory);

      if (props?.changeUrl) {
        this.redirect(state, null, link);
      }
    } catch (err) {
      const parsedPathname = link.split('/');

      const newPathname = parsedPathname.length
        ? parsedPathname.slice(0, parsedPathname.length - 1).join('/')
        : '/';

      this.historyEventHandler(pathname, { changeUrl: true }, newPathname);
    }
  };
}

export default Router;
