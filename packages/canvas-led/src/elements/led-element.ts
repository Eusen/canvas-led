import {LEDStyle} from '../style/led-style';
import {LEDDocument} from '../document/led-document';

export class LEDElement {
  tagName = '';
  id = '';
  className = '';
  classList = [];
  attributes = {};

  hidden = false;

  children: LEDElement[] = [];
  firstChild!: LEDElement;
  lastChild!: LEDElement;

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

  offsetParent = 0;

  draggable = false;

  prevSibling!: LEDElement;
  nextSibling!: LEDElement;

  style = new LEDStyle();

  ownerDocument!: LEDDocument;
}
