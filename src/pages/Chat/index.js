import Handlebars from 'handlebars';
import { chatPageTemplate } from './index.tmpl';

class ChatPage {
  constructor() {
    this.compiler = Handlebars.compile(chatPageTemplate);
  }

  compile(config) {
    return this.compiler(config);
  }
}

export default ChatPage;
