import { fromJS, Map } from 'immutable'
import * as Actions from './constants'


export const initState = fromJS({
  theme: Actions.LIGHT
})

/**
 * Common reducer
 * @param state
 * @param action
 * @returns {*}
 */
function themeReducer(state = initState, action = {}) {
  const { type } = action
  switch (type) {
    case Actions.SWITCH_MODE:
      return state.set('theme', state.get('theme') === Actions.LIGHT ? Actions.DARK : Actions.LIGHT)
    default:
      return state
  }
}
export default themeReducer
