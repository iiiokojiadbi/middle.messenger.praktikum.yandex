import {
  internalErrorConfig,
  notFoundConfig,
  signinConfig,
  signupConfig,
} from './configs';
import ChatPage from './pages/Chat';
import ErrorPage from './pages/Error';
import SignPage from './pages/Sign';

const root = document.querySelector('#root');

window.onload = function () {
  if (window.location.pathname === '/') {
    window.location.pathname = '/signin';
  }

  if (window.location.pathname === '/chat') {
    const chatPage = new ChatPage();

    root.innerHTML = chatPage.compile();
  }

  if (window.location.pathname === '/signin') {
    const signPage = new SignPage();

    root.innerHTML = signPage.compile(signinConfig);
  }

  if (window.location.pathname === '/signup') {
    const signupPage = new SignPage();

    root.innerHTML = signupPage.compile(signupConfig);
  }

  if (window.location.pathname === '/not-found') {
    const errorPage = new ErrorPage();

    root.innerHTML = errorPage.compile(notFoundConfig);
  }

  if (window.location.pathname === '/error') {
    const errorPage = new ErrorPage();

    root.innerHTML = errorPage.compile(internalErrorConfig);
  }
};

if (module.hot) {
  module.hot.accept();
}
