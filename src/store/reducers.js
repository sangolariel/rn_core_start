import { combineReducers } from 'redux'
import themeReducer from './theme/reducer'
import languageReducer from './language/reducer'
import authReducer from './auth/reducer'
import appSettingReducer from './appSetting/reducer'
import homeReducer from './home/reducer'
import modalReducer from './modal/reducer'
import collectionReducer from './collection/reducer'
import productReducer from './product/reducer'
import notificationReducer from './notification/reducer'
import storeApiReducer from './storeApi/reducer'
import cartReducer from './cart/reducer'

/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  appSetting: appSettingReducer,
});

export default rootReducers
