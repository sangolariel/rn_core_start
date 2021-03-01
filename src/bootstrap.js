import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { I18nManager, StatusBar } from 'react-native'
import { useTranslation } from 'react-i18next'

/* check Internet */
import NetInfo from '@react-native-community/netinfo'

/* State Redux */
import { useSelector, useDispatch } from 'react-redux'
import {
  languageSelector,
} from './Store/language/selectors'
import { fetchSetting } from './store/common/actions'
import { fetchCategories } from './store/category/actions'

/* FlashMessage */
import FlashMessage from 'react-native-flash-message'

/* Theme */
import { DarkTheme, DefaultTheme, Provider as PaperProvider, Provider as ThemeProvider } from 'react-native-paper'
import { useColorScheme } from 'react-native-appearance'
import { PreferencesContext } from '~/router/context/PreferencesContext'
import { colors, fonts, spacing, dimension, shadow } from '~/theme/configs'

/* Router @react-navigation v5 */
import RootNavigator from '~/router'

/* Firebase */
import * as firebase from 'firebase'
import { firebaseConfig } from './configs/firebase'

// Initialize Firebase JS SDK
// https://firebase.google.com/docs/web/setup
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  console.error('Firebase setup error: ' + err)
  // ignore app already initialized error in snack
}


export default (props) => {
  /* Localization */
  const { i18n } = useTranslation()

  /*Declare redux and sagas*/
  const dispatch = useDispatch()
  const language = useSelector(state => languageSelector(state))

  /* Change language */
  if (i18n.language !== language) {
    i18n.changeLanguage(language)
  }

  /* Theme Setup */
  const colorScheme = useColorScheme()
  const [theme, switchTheme] = useState(
    colorScheme === 'dark' ? 'dark' : 'light'
  )
  const barStyle = theme === 'light' ? 'dark-content' : 'light-content'
  const [rtl] = useState(I18nManager.isRTL)

  const toggleTheme = () => {
    switchTheme(theme => (theme === 'light' ? 'dark' : 'light'))
  }

  const toggleRTL = useCallback(() => {
    I18nManager.forceRTL(!rtl)
  }, [rtl])

  const [stateCurrent, setState] = useState({ isUpdate: false, loaded: false })

  const [isConnected, setConnected] = useState(true)

  const preferences = useMemo(
    () => ({
      toggleTheme,
      toggleRTL,
      theme,
      rtl: (rtl ? 'right' : 'left'),
    }),
    [rtl, theme, toggleRTL]
  );

  const onCodepushCheckForUpdateApp = async () => {
    try {
      await dispatch(commonActions.toggleLoading(true));
      let isUpdate = await codePush.checkForUpdate();
      console.log('CHECKING FOR UPDATE APP...');
      if (isUpdate) {
        console.log('has new version');
        await dispatch(commonActions.toggleLoading(false));
        setTimeout(async () => {
          await dispatch(commonActions.setRequireUpdate());
        }, 300);
      } else {
        console.log('APP IS UP TO DATE');
        onCheckLoginSession();
      }
    } catch (err) {
      console.log(err);
      await dispatch(commonActions.toggleLoading(false));
    }
  };

  const setupResource = async () => {
    let stateNew = {
      isUpdate: false,
      loaded: false
    }
    try {
      dispatch(fetchSetting())
      dispatch(fetchCategories())

      /*Set loading success*/
      stateNew.loaded = true
      setState(stateNew)
    } catch (error) {
      console.error(`Setup error : ${error}`)
    }
  }

  /*Check internet*/
  NetInfo.fetch().then(state => {
    if (isConnected !== state.isConnected) {
      setConnected(state.isConnected)
    }
  });

  useEffect(() => {
    onCodepushCheckForUpdateApp()
    setupResource()
  }, [])

  //Set config theme
  let themeConfig = theme === 'light'
    ? {
      ...DefaultTheme,
      colors: { ...DefaultTheme.colors, ...colors.light.colors }
    }
    : {
      ...DarkTheme,
      colors: { ...DarkTheme.colors, ...colors.dark.colors }
    }
  themeConfig['fonts'] = stateCurrent.loaded ? fonts : DefaultTheme.fonts
  themeConfig['spacing'] = { ...spacing }
  themeConfig['dimension'] = { ...dimension }
  themeConfig['shadow'] = { ...shadow }
  if (stateCurrent.loaded) {
  } else {
    return null
  }

  return (
    <ThemeProvider>
      <StatusBar translucent barStyle={barStyle} backgroundColor="transparent" />
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={themeConfig}>
          <RootNavigator />
        </PaperProvider>
      </PreferencesContext.Provider>
      <FlashMessage position="top" />
    </ThemeProvider>
  )
}
