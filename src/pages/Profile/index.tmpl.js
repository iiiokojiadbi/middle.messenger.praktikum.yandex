import { ROUTE } from '../../constants/route';

const profilePageTemplate = `
{{#> container class="profile" }}
  <img class="profile__avatar" src="/assets/logo.png" alt="logo" />
  <h3 class="profile__title">Иван</h3>
  <p class="profile__row">
    <span class="profile__label">Почта</span>
    <span class="profile__value">pochta@yandex.ru</span>
  </p>
  <p class="profile__row">
    <span class="profile__label">Логин</span>
    <span class="profile__value">ivanivanov</span>
  </p>
  <p class="profile__row">
    <span class="profile__label">Имя</span>
    <span class="profile__value">Иван</span>
  </p>
  <p class="profile__row">
    <span class="profile__label">Фамилия</span>
    <span class="profile__value">Иванов</span>
  </p>
  <p class="profile__row">
    <span class="profile__label">Имя в чате</span>
    <span class="profile__value">Иван</span>
  </p>
  <p class="profile__row">
    <span class="profile__label">Телефон</span>
    <span class="profile__value">+7(999) 999-99-99</span>
  </p>

  {{#each redirect}}
    <p class="profile__row profile__row_redirect">
      {{> redirect class="profile__edit" to=to  text=text }}
    </p>
  {{/each}}

  {{> redirect class="profile__logout" to=logout.to  text=logout.text }}
{{/container}}
`;

const profileEditPageTemplate = `
{{#> container class="profile" }}
  <img class="profile__avatar" src="/assets/logo.png" alt="logo" />
  <form class="profile__form" action="#">
  {{#each inputs}}
  <input
    class="input profile__input"
    name="{{ name }}"
    type="{{ type }}"
    required
    autocomplete="off"
    placeholder="{{ placeholder }}"
  />
  {{/each}}
  <button class="button profile__submit" data-link={{ submit.to }} type="{{ submit.type }}">
    {{ submit.text }}
  </button>
  </form>
{{/container}}
`;

const routes = {
  [ROUTE.PROFILE]: profilePageTemplate,
  [ROUTE.PROFILE_EDIT]: profileEditPageTemplate,
  [ROUTE.PROFILE_CHANGE_PASSWORD]: profileEditPageTemplate,
};

export default routes;
