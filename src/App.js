import SigninPage from './pages/Signin';
import SignupPage from './pages/Signup';

const root = document.querySelector('#root');

window.onload = function () {
  if (window.location.pathname === '/') {
    window.location.pathname = '/signin';
  }

  if (window.location.pathname === '/signin') {
    const signPage = SigninPage.compile();

    root.innerHTML = signPage;
  }

  if (window.location.pathname === '/signup') {
    const signupPage = SignupPage.compile();

    root.innerHTML = signupPage;
  }
};

if (module.hot) {
  module.hot.accept();
}
