import Handlebars from 'handlebars';
import RenderBlock from '../../utils/RenderBlock';
import { chatPageTemplate } from './index.tmpl';

class ChatPage extends RenderBlock {
  constructor(data) {
    super(data);

    this.compiler = Handlebars.compile(chatPageTemplate);
  }

  innerHTML(pushHistory) {
    super.innerHTML();
    super.setEventListener(pushHistory);
  }
}

export default ChatPage;
