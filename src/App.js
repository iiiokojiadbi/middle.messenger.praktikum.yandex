import {
  internalErrorConfig,
  notFoundConfig,
  signinConfig,
  signupConfig,
} from './configs';
import { ROUTE } from './constants/route';
import ChatPage from './pages/Chat';
import ErrorPage from './pages/Error';
import SignPage from './pages/Sign';
import { pathname, setPathname } from './utils/helpers';

const root = document.querySelector('#root');

window.onload = function () {
  if (pathname === ROUTE.ROOT) {
    setPathname(ROUTE.SIGN_IN);
  }

  if (pathname === ROUTE.CHAT) {
    const chatPage = new ChatPage();

    root.innerHTML = chatPage.compile();
  }

  if (pathname === ROUTE.SIGN_IN) {
    const signPage = new SignPage();

    root.innerHTML = signPage.compile(signinConfig);
  }

  if (pathname === ROUTE.SIGN_UP) {
    const signupPage = new SignPage();

    root.innerHTML = signupPage.compile(signupConfig);
  }

  if (pathname === ROUTE.NOT_FOUND) {
    const errorPage = new ErrorPage();

    root.innerHTML = errorPage.compile(notFoundConfig);
  }

  if (pathname === ROUTE.ERROR) {
    const errorPage = new ErrorPage();

    root.innerHTML = errorPage.compile(internalErrorConfig);
  }
};

if (module.hot) {
  module.hot.accept();
}
