import {fromJS, Map, merge} from 'immutable'
import {REHYDRATE} from 'redux-persist/lib/constants';
import * as Actions from './constants'
import {initConfigs} from '../../Configs/common'
import { DEFAULT_CURRENCY, DEFAULT_LANGUAGE_CODE } from '../../Configs/contants'

export const initState = fromJS({
  loaded: false,
  onBoardLoaded: false,
  dataOnBoard: { dataImage: [] },
  dataHome: { data:[], settings:{}},
  configs: fromJS(initConfigs),
  currency: null,
  defaultCurrency: DEFAULT_CURRENCY,
  currencies: [],
  defaultLanguage: DEFAULT_LANGUAGE_CODE
});

/**
 * Common reducer
 * @param state
 * @param action
 * @returns {*}
 */
function commonReducer(state = initState, action = {}) {
  const {type, payload} = action
  switch (type) {
    case Actions.FETCH_SETTING_SUCCESS:
      const defaultCurrency = payload.setting.currency;
      // Check currency in list currency
      const isCurrencyValidate =
          payload.setting.currencies &&
          state.get('currency') &&
          payload.setting.currencies[state.get('currency')];

      return state.set('configs', merge(Map(initConfigs), payload.setting))
          .set('dataOnBoard',payload.dataOnBoard)
          .set('dataHome',payload.dataHome)
          .set('loaded',true)
          .set(
              'currency',
              isCurrencyValidate ? state.get('currency') : defaultCurrency,
          )
          .set('defaultCurrency', defaultCurrency)
          .set('initialCountry', defaultCurrency)
    // Close On Board
    case Actions.ON_BOARD_LOADED:
      return state.set('onBoardLoaded', true)
    //Load redux
    case REHYDRATE:
      const data = payload && payload.common ? payload.common : Map();
      const prepareData  = initState.merge(data);
      return prepareData;
    default:
      return state;
  }
}

function reloadApp(language) {
  const isRTL = i18n.dir(language) === 'rtl';
  I18nManager.forceRTL(isRTL);
  // Reload
  if (isRTL !== I18nManager.isRTL) {
    RNRestart.Restart();
    // Updates.reloadFromCache(); // For expo
  }
}
export default commonReducer;
