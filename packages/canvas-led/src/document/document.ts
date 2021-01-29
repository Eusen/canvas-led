import {LEDStyleSheet} from '../style/style-sheet';
import {LEDElement} from '../element/element';

export class LEDDocument {
  all: LEDElement[] = [];
  body!: LEDElement;
  title!: string;
  styleSheets: LEDStyleSheet[] = [];
}
