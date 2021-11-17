export const ROUTE = {
  EMPTY: '',
  ROOT: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  CHAT: '/chat',
  NOT_FOUND: '/not-found',
  ERROR: '/error',
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile/edit',
  PROFILE_CHANGE_PASSWORD: '/profile/password',
};

export const VALID_URL = {
  SIGN_IN: ROUTE.SIGN_IN,
  SIGN_UP: ROUTE.SIGN_UP,
  CHAT: ROUTE.CHAT,
  NOT_FOUND: ROUTE.NOT_FOUND,
  ERROR: ROUTE.ERROR,
  PROFILE: ROUTE.PROFILE,
};

export const SKIPPED_REDIRECTS_URL = [ROUTE.EMPTY, ROUTE.ROOT];
