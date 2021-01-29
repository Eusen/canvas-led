import {LEDStyle} from '../style/style';
import {LEDDocument} from '../document/document';
import {LEDAttributes} from './attributes';
import {LEDClassList} from './class';

class LEDElementBase {
  id = '';
  tagName = '';
  attributes = new LEDAttributes();
  hidden = false;
  draggable = false;
}

class LEDElementClassExtra extends LEDElementBase {
  classList = new LEDClassList();

  get className() {
    return this.classList.name;
  }
}

class LEDElementStyleExtra extends LEDElementClassExtra {
  style = new LEDStyle();

  clientHeight = 0;
  clientWidth = 0;

  clientTop = 0;
  clientLeft = 0;
  clientRight = 0;
  clientBottom = 0;

  offsetHeight = 0;
  offsetWidth = 0;

  offsetTop = 0;
  offsetLeft = 0;
  offsetRight = 0;
  offsetBottom = 0;

  scrollHeight = 0;
  scrollWidth = 0;

  scrollLeft = 0;
  scrollTop = 0;
  scrollRight = 0;
  scrollBottom = 0;

  offsetParentTop = 0;
  offsetParentLeft = 0;
  offsetParentRight = 0;
  offsetParentBottom = 0;
}

class LEDElementChildrenExtra extends LEDElementStyleExtra {
  children: LEDElement[] = [];

  get firstChild() {
    return this.children[0];
  }

  get lastChild() {
    return this.children[this.children.length - 1];
  }
}

export class LEDElement extends LEDElementChildrenExtra {
  ownerDocument!: LEDDocument;
  prevSibling!: LEDElement;
  nextSibling!: LEDElement;
}
