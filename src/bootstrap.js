import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { I18nManager, StatusBar, Platform } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

/*Axios */
import axios from 'axios'

/* check Internet */
import NetInfo from '@react-native-community/netinfo'

/* State Redux */
import { useSelector, useDispatch } from 'react-redux'
import {
  languageSelector,
} from './store/language/selectors'

/* Theme */
import { DarkTheme, DefaultTheme, Provider as PaperProvider, Provider as ThemeProvider } from 'react-native-paper'
import { useColorScheme } from 'react-native-appearance'
import { PreferencesContext } from '~/router/context/PreferencesContext'
import { colors, fonts, spacing, dimension, shadow } from '~/theme/configs'

import AppSetting from './Screens/AppSetting'
import RootModal from './Screens/RootModal'
import Notification from './Screens/Notification'

/* Router @react-navigation v5 */
import RootNavigator from '~/Router'

/* Firebase */
import * as firebase from 'firebase'
import { firebaseConfig } from './configs/firebase'

import messaging from '@react-native-firebase/messaging'
import {sendLogSlack} from  '~/utils/helper'

// Initialize Firebase JS SDK
// https://firebase.google.com/docs/web/setup
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  console.error('Firebase setup error: ' + err)
  // ignore app already initialized error in snack
}


export default (props) => {

  /* Prevent auto hide loading */
  if (Platform.OS === 'android') {
    SplashScreen.preventAutoHideAsync()
  }

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
    Updates.reloadAsync()
  }, [rtl])

  const [stateCurrent, setState] = useState({
    isUpdate: false,
    loaded: false,
    locale: Localization.locale
  })

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


  const setupResource = async () => {
    let stateNew = {
      isUpdate: false,
      loaded: false
    }
    try {
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
    messaging().onNotificationOpenedApp(remoteMessage => {
      sendLogSlack("Notification caused app to open from background state")
      sendLogSlack("onMessage-data")
      sendLogSlack(JSON.stringify(remoteMessage.data))
      sendLogSlack("onMessage-remoteMessage")
      sendLogSlack(JSON.stringify(remoteMessage))
    })
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            sendLogSlack("Notification caused app to open from quit state:")
            sendLogSlack("onMessage-data")
            sendLogSlack(JSON.stringify(remoteMessage.data))
            sendLogSlack("onMessage-remoteMessage")
            sendLogSlack(JSON.stringify(remoteMessage))
          }else{
            sendLogSlack("ELse Notification caused app to open from quit state:")
          }
        })
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
    if (Platform.OS === 'android') {
      // SplashScreen.hideAsync()
  }
  } else {
    return null
  }
  return (
    <ThemeProvider>
      <StatusBar translucent
        barStyle={Platform.OS === 'ios' ? 'dark-content' : barStyle}
        backgroundColor="transparent" />
      <PreferencesContext.Provider value={preferences}>
        <PaperProvider theme={themeConfig}>
          <AppSetting locale={stateCurrent.locale} />
          <RootNavigator />
          <RootModal />
          <Notification />
        </PaperProvider>
      </PreferencesContext.Provider>
    </ThemeProvider>
  )
}
