import { ROUTE } from '../../constants/route';

export const chatPageTemplate = `
{{#> container class="chat" }}
    {{> redirect class="chat__redirect" to="${ROUTE.NOT_FOUND}" text="Перейти на 404 страницу" }}
    {{> redirect class="chat__redirect" to="${ROUTE.ERROR}" text="Перейти на 500 страницу" }}
{{/container}}
`;
