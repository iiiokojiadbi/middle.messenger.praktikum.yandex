export default `
{{#> container class="sign" }}
  <img class="sign__logo" src="/assets/logo.png" alt="logo" />
  <h1 class="sign__header">{{ title }}</h1>
  <form class="sign__form" action="#">
    {{#each inputs}}
    <input
      class="input sign__input"
      name="{{ name }}"
      type="{{ type }}"
      required
      autocomplete="off"
      placeholder="{{ placeholder }}"
    />
    {{/each}}
    <button class="button sign__submit" type="{{ submit.type }}">
      {{ submit.text }}
    </button>
  </form>
  {{> redirect class="sign__redirect" to=redirect.to  text=redirect.text }}
{{/container}}
`;
