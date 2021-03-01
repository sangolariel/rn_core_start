import { fromJS, Map, Set, setIn } from 'immutable'

import i18n from '~/Localization/i18n'
import * as types from './constants'

var initialState = fromJS({
  navigation: null,
  i18n: i18n,
  storage: {}
})

export default function settingReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.UPDATE_NAVIGATION: {
      return state.set('navigation', action.navigation)
    }
    case types.SET_LANG: {
      return state.setIn(['i18n', 'locale'], action.locale)
    }
    case types.CHANGE_LANG: {
      let locale = 'vi-VN';
      if (state.toJS().i18n.locale === 'vi-VN') {
        locale = 'en-US'
      } else {
        locale = 'vi-VN'
      }
      return state.setIn(['i18n', 'locale'], locale)
    }
    case types.SET_STORAGE: {
      const { key, value } = action;
      return state.setIn(['storage', 'key'], fromJS(value))
    }
    default:
      return state
  }
}