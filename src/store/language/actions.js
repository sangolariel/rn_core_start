import * as Actions from './constants'

/**
 * Action change language
 * @param code
 * @returns {{type: string, payload: string}}
 */
export function setLanguage(code) {
  return {
    type: Actions.SET_LANGUAGE,
    payload: code,
  }
}

/**
 * Action change language
 * @param code
 * @returns {{type: string, payload: string}}
 */
export function changeLanguage(code) {
  return {
    type: Actions.CHANGE_LANGUAGE,
    payload: code,
  }
}
