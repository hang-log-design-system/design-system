const color = {
  black: 'black', // heading text
  gray800: '#282828', // default text
  gray700: '#5e5e5e',
  gray600: '#727272', // light text
  gray500: '#a6a6a6',
  gray400: '#bbbbbb',
  gray300: '#dddddd',
  gray200: '#e8e8e8', // border
  gray100: '#f3f3f3', // background
  white: 'white', // background

  blue800: '#004765',
  blue700: '#006f9f',
  blue600: '#009ee2',
  blue500: '#00b2ff', // primary
  blue400: '#80d9ff',
  blue300: '#bbebff',
  blue200: '#d8f3ff',
  blue100: '#eaf9ff',

  red300: '#c50000', // dark red
  red200: '#ea0000', // red
  red100: '#fff2f2', // light red

  green: '#2fc56e',
};

const text = {
  large: {
    fontSize: '18px',
    lineHeight: '28px',
  },
  medium: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  small: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  xSmall: {
    fontSize: '12px',
    lineHeight: '20px',
  },
};

const heading = {
  xxLarge: {
    fontSize: '40px',
    lineHeight: '52px',
  },
  xLarge: {
    fontSize: '36px',
    lineHeight: '44px',
  },
  large: {
    fontSize: '32px',
    lineHeight: '40px',
  },
  medium: {
    fontSize: '28px',
    lineHeight: '36px',
  },
  small: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  xSmall: {
    fontSize: '20px',
    lineHeight: '28px',
  },
};

const spacer = {
  spacing0: '0',
  spacing1: '4px',
  spacing2: '8px',
  spacing3: '16px',
  spacing4: '24px',
  spacing5: '32px',
  spacing6: '48px',
  spacing7: '64px',
  spacing8: '96px',
  spacing9: '128px',
};

const borderRadius = {
  small: '4px',
  medium: '8px',
  large: '16px',
};

const boxShadow = {
  shadow1: '0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
  shadow2: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
  shadow3: '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
  shadow4: '0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)',
  shadow5: '1px 2px 4px 0px rgba(0, 0, 0, 0.15)',
  shadow6: '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
  shadow7: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
  shadow8: '0px 0px 5px 0px rgba(0, 0, 0, 0.15)',
  shadow9: '0px 0px 10px 0px rgba(0, 0, 0, 0.20)',
  shadow10: '0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset',
};

export const Theme = {
  color,
  text,
  heading,
  spacer,
  borderRadius,
  boxShadow,
};
