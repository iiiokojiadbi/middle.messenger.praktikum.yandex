import { ROUTE } from '../constants/route';

export const notFoundConfig = {
  code: '404',
  text: 'Не туда попали',
  redirect: {
    text: 'Назад к чатам',
    to: ROUTE.CHAT,
  },
};

export const internalErrorConfig = {
  code: '500',
  text: 'Мы уже фиксим',
  redirect: {
    text: 'Назад к чатам',
    to: ROUTE.CHAT,
  },
};
