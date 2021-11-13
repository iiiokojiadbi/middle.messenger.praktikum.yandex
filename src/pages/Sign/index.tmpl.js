export const signPageTemplate = `
<div class="container">
  <div class="container__content sign">
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
    <a class="redirect sign__redirect" href="{{ redirect.to }}">{{ redirect.text }}</a>
  </div>
</div>
`;
