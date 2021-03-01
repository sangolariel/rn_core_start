// Color system
export const white = '#ffffff';
export const grey1 = '#f4f4f4';
export const grey2 = '#e9ecef';
export const grey3 = '#dee2e6';
export const grey4 = '#adb5bd';
export const grey5 = '#999999';
export const grey6 = '#777777';
export const grey7 = '#383838';
export const grey8 = '#1e1e1e';
export const grey9 = '#2C2C2C';
export const black = '#1E1F28';

export const red = '#e60023';
export const orange = '#F2711C';
export const yellow = '#FBBD08';
export const olive = '#B5CC18';
export const green = '#51d96c';
export const teal = '#00B5AD';
export const blue = '#2185D0';
export const violet = '#6435C9';
export const purple = '#A333C8';
export const pink = '#E03997';
export const brown = '#A5673F';

export default {
  dark: {
    colors: {
      accent: "#03dac6",
      native: "#2A2C36",
      backdrop: "rgba(0, 0, 0, 0.5)",
      background: "#2A2C36",
      disabled: "rgba(255, 255, 255, 0.38)",
      error: "#CF6679",
      notification: "#ff80ab",
      onBackground: "#FFFFFF",
      onSurface: "#FFFFFF",
      placeholder: "rgba(255, 255, 255, 0.54)",
      primary: "#EF3651",
      surface: "#1E1F28",
      text: "#F6F6F6",
      bgColor: black,
      bgColorSecondary: grey7,
      warning: yellow,
      red,
      orange,
      yellow,
      olive,
      green,
      blue,
      teal,
      violet,
      purple,
      pink,
      brown,
      grey1,
      grey2,
      grey3,
      grey4,
      grey5,
      grey6,
      grey7,
      grey8,
      grey9,
      black,
      // ViewLabel
      ViewLabel: {
        color: grey6,
        colorHeading: white,
      },
      secondary: grey6,
      white,
      greyOutline: '#bbb',
      searchBg: '#303337',
      listItemBg: grey8,
      success: green,
      divider: grey6,
      border: grey9,
      icon: grey1,
      platform: {
        ios: {
          primary: '#007aff',
          secondary: '#5856d6',
          success: '#4cd964',
          error: '#ff3b30',
          warning: '#ffcc00',
        },
        android: {
          primary: '#2196f3',
          secondary: '#9C27B0',
          success: '#4caf50',
          error: '#f44336',
          warning: '#ffeb3b',
        },
      },
      headerStyle: {
        backgroundColor: "#1e1f28",
        headerTintColor: "#ffffff"
      }
    }
  },
  light: {
    colors: {
      "accent": "#03dac4",
      "native": "#E5E5E5",
      "backdrop": "rgba(0, 0, 0, 0.5)",
      "background": "#f6f6f6",
      "disabled": "rgba(0, 0, 0, 0.26)",
      "error": "#B00020",
      "notification": "#f50057",
      "onBackground": "#000000",
      "onSurface": "#000000",
      "placeholder": "rgba(0, 0, 0, 0.54)",
      "primary": "#DB3022",
      "surface": "#ffffff",
      "text": "#000000",
      "bgColor": white,
      "bgColorSecondary": grey1,
      "warning": yellow,
      icon: grey7,
      red,
      orange,
      yellow,
      olive,
      green,
      blue,
      teal,
      violet,
      purple,
      pink,
      brown,
      grey9,
      // ViewLabel
      ViewLabel: {
        color: grey5,
        colorHeading: black,
      },
      secondary: grey6,
      white: white,
      grey1: grey1,
      grey2: grey2,
      grey3: grey3,
      grey4: grey4,
      grey5: grey5,
      grey6: grey6,
      grey7: grey7,
      grey8: grey8,
      black: black,

      greyOutline: '#bbb',
      searchBg: '#303337',
      listItemBg: white,
      success: green,
      // Darker color if hairlineWidth is not thin enough
      divider: grey2,
      border: grey2,
      platform: {
        ios: {
          primary: '#007aff',
          secondary: '#5856d6',
          success: '#4cd964',
          error: '#ff3b30',
          warning: '#ffcc00',
        },
        android: {
          primary: '#2196f3',
          secondary: '#9C27B0',
          success: '#4caf50',
          error: '#f44336',
          warning: '#ffeb3b',
        },
      },
      headerStyle: {
        backgroundColor: "#ffffff",
        headerTintColor: "#000000"
      }
    }
  }
};
