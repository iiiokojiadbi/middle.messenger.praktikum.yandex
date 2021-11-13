export const signupPageTemplate = `
<div class="container">
  <div class="container__content sign">
    <h1 class="sign__header">Регистрация</h1>
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
        name="login"
        type="text"
        required
        autocomplete="off"
        placeholder="Придумайте логин..."
      />
      <input
        class="input sign__input"
        name="name"
        type="text"
        required
        autocomplete="off"
        placeholder="Придумайте имя..."
      />
      <input
        class="input sign__input"
        name="surname"
        type="text"
        required
        autocomplete="off"
        placeholder="Ваша фамилия..."
      />
      <input
        class="input sign__input"
        name="tel"
        type="text"
        required
        autocomplete="off"
        placeholder="Номер телефона..."
      />
      <input
        class="input sign__input"
        name="password"
        type="password"
        required
        autocomplete="off"
        placeholder="Придумайте пароль..."
      />
      <input
        class="input sign__input"
        name="repeat"
        type="password"
        required
        autocomplete="off"
        placeholder="Повторите придуманный пароль..."
      />
      <button class="button sign__submit" type="submit">
        Зарегистрироваться
      </button>
    </form>
    <a class="redirect sign__redirect" href="/signin">Войти</a>
  </div>
</div>
`;
