export const signinPageTemplate = `
<div class="sign">
  <div class="sign__content">
    <img class="sign__logo" src="/assets/logo.png" alt="logo" />
    <h1 class="sign__header">Вход в чат</h1>
    <form class="sign__form" action="#">
      <input
        class="input sign__input"
        name="email"
        type="email"
        required
        autocomplete="off"
        placeholder="Ваша почта..."
      />
      <input
        class="input sign__input"
        name="password"
        type="password"
        required
        autocomplete="off"
        placeholder="Ваш пароль..."
      />
      <button class="button sign__submit" type="submit">
        Продолжить
      </button>
    </form>
    <a class="sign__redirect" href="/signup">Зарегистрироваться</a>
  </div>
</div>
`;
