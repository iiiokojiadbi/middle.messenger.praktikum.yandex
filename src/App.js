import SigninPage from './pages/Signin';
import SignupPage from './pages/Signup';

const root = document.querySelector('#root');

const signPage = SigninPage.compile();
const signupPage = SignupPage.compile();

window.onload = function () {
  if (window.location.pathname === '/') {
    window.location.pathname = '/signin';
  }

  if (window.location.pathname === '/signin') {
    root.innerHTML = signPage;
  }

  if (window.location.pathname === '/signup') {
    root.innerHTML = signupPage;
  }
};

// console.log(window.location);

// if (window.location.pathname === '/signin') {
// }

// if (window.location.pathname === '/') {
//   const a = document.createElement('a');
//   a.textContent = 'app';

//   a.setAttribute('href', '/signin');

//   root.appendChild(a);
// }

if (module.hot) {
  module.hot.accept();
}
