import { ROUTE } from '../constants/route';

export const signinConfig = {
  title: 'Вход в чат',
  inputs: [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Ваша почта...',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Ваш пароль...',
    },
  ],
  submit: {
    type: 'submit',
    text: 'Продолжить',
    to: ROUTE.CHAT,
  },
  redirect: {
    text: 'Зарегистрироваться',
    to: ROUTE.SIGN_UP,
  },
};

export const signupConfig = {
  title: 'Регистрация',
  inputs: [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Ваша почта...',
    },
    {
      name: 'login',
      type: 'text',
      placeholder: 'Придумайте логин...',
    },
    {
      name: 'first_name',
      type: 'text',
      placeholder: 'Ваше имя...',
    },
    {
      name: 'second_name',
      type: 'text',
      placeholder: 'Ваша фамилия...',
    },
    {
      name: 'phone',
      type: 'text',
      placeholder: 'Номер телефона...',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Придумайте пароль...',
    },
    {
      name: 'repeat',
      type: 'password',
      placeholder: 'Повторите придуманный пароль...',
    },
  ],
  submit: {
    type: 'submit',
    text: 'Зарегистрироваться',
    to: ROUTE.SIGN_IN,
  },
  redirect: {
    text: 'Войти',
    to: ROUTE.SIGN_IN,
  },
};
