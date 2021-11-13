export const errorPageTemplate = `
<div class="container">
  <div class="container__content error">
    <h1 class="error__code">{{ code }}</h1>
    <span class="error__text">{{ text }}</span>
    <a class="redirect error__redirect" href="{{ redirect.to }}">{{ redirect.text }}</a>
  </div>
</div>
`;
