export const errorPageTemplate = `
{{#> container class="error" }}
    <h1 class="error__code">{{ code }}</h1>
    <span class="error__text">{{ text }}</span>
    {{> redirect class="error__redirect" }}
{{/container}}
`;
