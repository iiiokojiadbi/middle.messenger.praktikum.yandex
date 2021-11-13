import { internalErrorConfig, notFoundConfig } from './configs';
import ErrorPage from './pages/Error';
import SigninPage from './pages/Signin';
import SignupPage from './pages/Signup';

const root = document.querySelector('#root');

window.onload = function () {
  if (window.location.pathname === '/') {
    window.location.pathname = '/signin';
  }

  if (window.location.pathname === '/signin') {
    const signPage = new SigninPage();

    root.innerHTML = signPage.compile();
  }

  if (window.location.pathname === '/signup') {
    const signupPage = new SignupPage();

    root.innerHTML = signupPage.compile();
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
