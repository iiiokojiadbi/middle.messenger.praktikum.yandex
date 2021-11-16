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
import { pathname } from './utils/helpers';
import Router from './utils/Router';

const root = document.querySelector('#root');
const pages = {
  [ROUTE.CHAT]: new ChatPage({ root, config: {} }),
  [ROUTE.SIGN_IN]: new SignPage({ root, config: signinConfig }),
  [ROUTE.SIGN_UP]: new SignPage({ root, config: signupConfig }),
  [ROUTE.NOT_FOUND]: new ErrorPage({ root, config: notFoundConfig }),
  [ROUTE.ERROR]: new ErrorPage({ root, config: internalErrorConfig }),
};

const router = new Router(pages);

router.redirect(pathname, null, pathname);

if (module.hot) {
  module.hot.accept();
}
