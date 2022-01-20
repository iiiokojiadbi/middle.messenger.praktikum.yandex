import Handlebars from 'handlebars';
import { ROUTE } from '../../constants/route';
import { pathname } from '../../utils/helpers';
import RenderBlock from '../../utils/RenderBlock';
import template from './index.tmpl';

class ProfilePage extends RenderBlock {
  static selfRoutes = [
    ROUTE.PROFILE,
    ROUTE.PROFILE_EDIT,
    ROUTE.PROFILE_CHANGE_PASSWORD,
  ];

  constructor(data) {
    super(data);

    this.compiler = Handlebars.compile(template[ROUTE.PROFILE]);
  }

  setEventListener(pushHistory) {
    const link = this.root.querySelectorAll('a');

    link.forEach((elem) =>
      elem.addEventListener('click', (e) => {
        e.preventDefault();

        const to = e.target.dataset.link;

        this.rebuild(to, pushHistory);
      })
    );

    const submit = this.root.querySelectorAll('[type="submit"]')[0] ?? null;

    submit?.addEventListener('click', (e) => {
      e.preventDefault();

      const to = e.target.dataset.link;

      this.rebuild(to, pushHistory);
    });
  }

  rebuild(to, pushHistory) {
    const canRebuild = ProfilePage.selfRoutes.includes(to);

    if (canRebuild) {
      this.compiler = Handlebars.compile(profileTemplates[to]);
      this.compile(this.configs[to]);
      this.innerHTML(pushHistory);
    }

    pushHistory(pathname, null, to, canRebuild);
  }

  compile(config = null) {
    this.content = this.compiler(config ?? this.configs[ROUTE.PROFILE]);
    return this;
  }

  innerHTML(pushHistory) {
    super.innerHTML();
    this.setEventListener(pushHistory);
  }
}

export default ProfilePage;
