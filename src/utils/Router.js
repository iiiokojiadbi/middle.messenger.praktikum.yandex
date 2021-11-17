import { ROUTE, VALID_URL } from '../constants/route';
import { pathname } from './helpers';

class Router {
  constructor(pages) {
    this.pages = pages;
    this.init();
  }

  redirect = (state, props, link) => {
    let to = link;

    if (['', '/'].includes(to)) {
      to = ROUTE.CHAT;
    }

    this.pushHistory(state, props, to);
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
    return Object.values(VALID_URL).some((path) => path === url);
  };

  getValidUrl = (link) => {
    if (!Object.values(ROUTE).includes(link)) {
      return ROUTE.NOT_FOUND;
    }

    const path = Object.entries(VALID_URL).find(([key, value]) => {
      if (value === ROUTE.ROOT) {
        return false;
      }

      return link.startsWith(value);
    });

    return path ? path[1] : ROUTE.NOT_FOUND;
  };

  historyEventHandler = (state, props, redirect) => {
    let link = redirect;
    let canChangeUrl = props?.changeUrl;

    if (['', '/'].includes(link)) {
      link = ROUTE.CHAT;
    }

    if (!this.checkValidUrl(link)) {
      const newLink = this.getValidUrl(link);
      link = newLink;
      canChangeUrl = true;
    }

    const page = this.pages[link];

    try {
      page.compile().innerHTML(this.pushHistory);

      if (canChangeUrl) {
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
