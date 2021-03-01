// flow
import * as Actions from './constants';

/**
 * Fetch settings
 * @returns {{type: string}}
 */
export function fetchSetting() {
  return {
    type: Actions.FETCH_SETTING,
  };
}

/**
 * Close Getting Stated
 * @returns {{type: string}}
 */
export function setOnBoardLoaded() {
  return {
    type: Actions.ON_BOARD_LOADED,
  }
}
