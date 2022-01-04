export default `
{{#> container class="error" }}
    <h1 class="error__code">{{ code }}</h1>
    <span class="error__text">{{ text }}</span>
    {{> redirect class="error__redirect" to=redirect.to  text=redirect.text }}
{{/container}}
`;
