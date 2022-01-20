import { ROUTE } from '../../constants/route';

export default `
{{#> container class="chat" }}
    {{> redirect class="chat__redirect" to="${ROUTE.CHAT}" text="Кнопка, чтобы потыкать" }}
    {{> redirect class="chat__redirect" to="${ROUTE.NOT_FOUND}" text="Перейти на 404 страницу" }}
    {{> redirect class="chat__redirect" to="${ROUTE.ERROR}" text="Перейти на 500 страницу" }}
    {{> redirect class="chat__redirect" to="${ROUTE.SIGN_IN}" text="Перейти к авторизации" }}
    {{> redirect class="chat__redirect" to="${ROUTE.SIGN_UP}" text="Перейти к регистрации" }}
    {{> redirect class="chat__redirect" to="${ROUTE.PROFILE}" text="Перейти к профилю" }}
{{/container}}
`;
