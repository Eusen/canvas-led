import {LEDElement} from '../elements/led-element';
import {LEDStyleSheet} from '../style/led-style-sheet';

export class LEDDocument {
  all: LEDElement[] = [];
  body!: LEDElement;
  title!: string;
  styleSheets: LEDStyleSheet[] = [];
}
