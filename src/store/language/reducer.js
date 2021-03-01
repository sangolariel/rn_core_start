import { fromJS, Map } from 'immutable'
import * as Actions from './constants'
import i18n from '~/Localization'
import { I18nManager } from 'react-native'
import { REHYDRATE } from 'redux-persist/lib/constants'
import { Restart } from 'fiction-expo-restart'

export const initState = fromJS({
  defaultLanguage: Actions.DEFAULT_LANGUAGE_CODE,
  language: null,
  languages: []
})

/**
 * Common reducer
 * @param state
 * @param action
 * @returns {*}
 */
function languageReducer(state = initState, action = {}) {
  const { type, payload } = action
  switch (type) {
    case Actions.SET_LANGUAGE:
      return state.set('language', payload.language).set('languages', payload.languages)
    case Actions.CHANGE_LANGUAGE:
      return state.set('language', payload)
    case REHYDRATE:
      const data = payload && payload.language ? payload.language : Map()
      const prepareData = initState.merge(data)
      const language = prepareData.get('language') ? prepareData.get('language') : Actions.DEFAULT_LANGUAGE_CODE
      reloadApp(language)
      return prepareData
    default:
      return state
  }
}

function reloadApp(language) {
  const isRTL = i18n.dir(language) === 'rtl'
  I18nManager.forceRTL(isRTL)
  // Reload
  if (isRTL !== I18nManager.isRTL) {
    Restart()
  }
}

export default languageReducer
