import Handlebars from 'handlebars';
import Partials from '../../components/Partials';
import { chatPageTemplate } from './index.tmpl';

class ChatPage extends Partials {
  constructor() {
    super();
    this.compiler = Handlebars.compile(chatPageTemplate);
  }

  compile(config) {
    return this.compiler(config);
  }
}

export default ChatPage;
