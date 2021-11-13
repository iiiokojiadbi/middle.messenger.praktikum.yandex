import { ROUTE } from '../../constants/route';

export const chatPageTemplate = `
<div class="container">
  <div class="container__content chat">
    <a class="redirect chat__redirect" href=${ROUTE.NOT_FOUND}>Перейти на 404 страницу</a>
    <a class="redirect chat__redirect" href=${ROUTE.ERROR}>Перейти на 500 страницу</a>
  </div>
</div>
`;
