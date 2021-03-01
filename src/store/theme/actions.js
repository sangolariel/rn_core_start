import * as Actions from './constants'

/**
 * Swith Theme
 * @returns {{type: string}}
 */
export function switchMode(theme) {
  return {
    type: Actions.SWITCH_MODE,
  }
}

