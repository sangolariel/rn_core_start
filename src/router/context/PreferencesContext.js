import React from 'react';

export const PreferencesContext = React.createContext({
  rtl: 'left',
  theme: 'light',
  userInfo: null,
  toggleTheme: () => {},
  toggleRTL: () => {},
  setUserInfo: () => {},
});
