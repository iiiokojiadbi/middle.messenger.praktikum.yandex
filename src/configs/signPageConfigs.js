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
  },
  redirect: {
    text: 'Зарегистрироваться',
    to: '/signup',
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
      name: 'name',
      type: 'text',
      placeholder: 'Ваше имя...',
    },
    {
      name: 'surname',
      type: 'text',
      placeholder: 'Ваша фамилия...',
    },
    {
      name: 'tel',
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
  },
  redirect: {
    text: 'Войти',
    to: '/signin',
  },
};
