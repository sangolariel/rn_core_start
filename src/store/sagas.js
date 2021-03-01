import { all } from 'redux-saga/effects'
// import languageSaga from './language/saga'
// import themeSaga from './theme/saga'
import authSaga from './auth/saga'
import homeSaga from './home/saga'
import collectionSaga from './collection/saga'
import notificationSaga from './notification/saga'
import storeApiSaga from './storeApi/saga'
// import cartSaga from './cart/saga'
/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */
export default function* rootSagas() {
  yield all([
    authSaga(),
    homeSaga(),
    collectionSaga(),
    notificationSaga(),
    storeApiSaga(),
  ])
}
