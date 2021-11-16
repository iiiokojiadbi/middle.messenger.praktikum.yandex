class Router {
  constructor(pages) {
    this.pages = pages;
    this.init();
  }

  redirect = (...args) => {
    this.pushHistory(...args);
  };

  pushHistory = (...args) => {
    history.pushState(...args);
    this.historyEventHandler(...args);
  };

  init = () => {
    window.onpopstate = history.onpushstate = this.historyEventHandler;
  };

  historyEventHandler = (state, props, redirect) => {
    let link = redirect;

    if (link === '/') {
      link = '/chat';
    }
    const page = this.pages[link];

    try {
      page.compile().innerHTML(this.pushHistory);
    } catch (err) {
      console.error('Непредвиденная ошибка');
      console.error(err);
    }
  };
}

export default Router;
