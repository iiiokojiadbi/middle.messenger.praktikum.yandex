import {
  internalErrorConfig,
  notFoundConfig,
  signinConfig,
  signupConfig,
  profileConfig,
  profileEditInfoConfig,
  profileChangePasswordConfig,
} from './configs';
import { pathname } from './utils/helpers';
import { ROUTE } from './constants/route';
import ChatPage from './pages/Chat';
import ErrorPage from './pages/Error';
import ProfilePage from './pages/Profile';
import SignPage from './pages/Sign';
import Router from './utils/Router';

const root = document.querySelector('#root');

const chatPage = new ChatPage({ root, configs: {} });
const signinPage = new SignPage({ root, configs: signinConfig });
const signupPage = new SignPage({ root, configs: signupConfig });
const errorPage = new ErrorPage({ root, configs: notFoundConfig });
const notFoundPage = new ErrorPage({ root, configs: internalErrorConfig });
const profilePage = new ProfilePage({
  root,
  configs: {
    [ROUTE.PROFILE]: profileConfig,
    [ROUTE.PROFILE_EDIT]: profileEditInfoConfig,
    [ROUTE.PROFILE_CHANGE_PASSWORD]: profileChangePasswordConfig,
  },
});

const pages = {
  [ROUTE.CHAT]: chatPage,
  [ROUTE.SIGN_IN]: signinPage,
  [ROUTE.SIGN_UP]: signupPage,
  [ROUTE.NOT_FOUND]: errorPage,
  [ROUTE.ERROR]: notFoundPage,
  [ROUTE.PROFILE]: profilePage,
  [ROUTE.PROFILE_EDIT]: profilePage,
};

const router = new Router(pages);

router.redirect(pathname, null, pathname);

if (module.hot) {
  module.hot.accept();
}
