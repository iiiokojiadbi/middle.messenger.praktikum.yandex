import { ROUTE } from '../constants/route';

export const profileConfig = {
  redirect: [
    {
      text: 'Изменить данные',
      to: ROUTE.PROFILE_EDIT,
    },
    {
      text: 'Изменить пароль',
      to: ROUTE.PROFILE_CHANGE_PASSWORD,
    },
  ],
  logout: {
    text: 'Выйти',
    to: ROUTE.SIGN_IN,
  },
};

export const profileEditInfoConfig = {
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
      name: 'display_name',
      type: 'text',
      placeholder: 'Отображаемое имя...',
    },
    {
      name: 'phone',
      type: 'text',
      placeholder: 'Номер телефона...',
    },
  ],
  submit: {
    type: 'submit',
    text: 'Сохранить',
    to: ROUTE.PROFILE,
  },
};

export const profileChangePasswordConfig = {
  inputs: [
    {
      name: 'newPassword',
      type: 'password',
      placeholder: 'Ваш новый пароль...',
    },
    {
      name: 'oldPassword',
      type: 'password',
      placeholder: 'Повторите новый пароль...',
    },
  ],
  submit: {
    type: 'submit',
    text: 'Сохранить',
    to: ROUTE.PROFILE,
  },
};
