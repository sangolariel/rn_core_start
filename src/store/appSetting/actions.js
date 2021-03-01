import * as types from './constants'

export const updateNavigation = navigation => {
  return {
    type: types.UPDATE_NAVIGATION,
    navigation
  }
}

export const setLang = locale => {
  return {
    type: types.SET_LANG,
    locale
  }
}

export const changeLang = () => {
  return {
    type: types.CHANGE_LANG
  }
}

export const setStorage = (key, value) => {
  return {
    type: types.SET_STORAGE,
    key,
    value
  }
}
