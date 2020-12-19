export const TextStyles: (keyof LEDStyleDeclaration)[] = [
  'color', 'fontSize', 'textAlign', 'fontWeight', 'lineHeight', 'lineBreak'
];

export const ScalableStyles: (keyof LEDStyleDeclaration)[] = [
  'left', 'top', 'right', 'bottom', 'width', 'height',
  'margin', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom',
  'padding', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom',
  'borderWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'
];

export const LayoutAffectedStyles: (keyof LEDStyleDeclaration)[] = [
  'margin', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight',
  'padding', 'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
  'width', 'height'
];

export interface LEDStyleDeclaration {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
  maxWidth: number;
  maxHeight: number;
  minWidth: number;
  minHeight: number;
  margin: string | number;
  marginLeft: number;
  marginRight: number;
  marginTop: number;
  marginBottom: number;
  padding: string | number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  borderWidth: string | number;
  borderLeftWidth: number;
  borderRightWidth: number;
  borderTopWidth: number;
  borderBottomWidth: number;
  flexDirection: 'column' | 'row';
  justifyContent: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  alignSelf: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  flex: number;
  flexWrap: 'wrap' | 'nowrap';
  position: 'relative' | 'absolute';

  color: string;
  fontSize: string;
  textAlign: 'center' | 'left' | 'right';
  fontWeight: number | string;
  lineHeight: number;
  lineBreak: number;

  hidden: boolean;
  scale: number;
  zIndex: number;
}

export class LEDStyle implements LEDStyleDeclaration {
  left = 0;
  top = 0;
  right!: number;
  bottom!: number;
  width = 0;
  height = 0;
  maxWidth!: number;
  maxHeight!: number;
  minWidth!: number;
  minHeight!: number;
  margin = 0;
  marginLeft = 0;
  marginRight = 0;
  marginTop = 0;
  marginBottom = 0;
  padding = 0;
  paddingLeft = 0;
  paddingRight = 0;
  paddingTop = 0;
  paddingBottom = 0;
  borderWidth = 0;
  borderBottomWidth = 0;
  borderLeftWidth = 0;
  borderRightWidth = 0;
  borderTopWidth = 0;
  alignItems!: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  alignSelf!: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  color = '#000000';
  flex!: number;
  flexDirection!: 'column' | 'row';
  flexWrap!: 'wrap' | 'nowrap';
  fontSize = '16px';
  fontWeight!: number | string;
  hidden!: boolean;
  justifyContent!: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  lineBreak!: number;
  lineHeight!: number;
  position: 'relative' | 'absolute' = 'relative';
  scale = 1;
  textAlign: 'center' | 'left' | 'right' = 'right';
  zIndex = 0;
}
