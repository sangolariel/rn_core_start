import { createSelector } from 'reselect'
// import {isLoginSelector} from '../auth/selectors'
// import { mainSwitch } from '../../Configs/router'
import { DEFAULT_CURRENCY } from '../../Configs/contants'

export const rootCommon = state => state.common

export const getStatusLoaded = createSelector(
    rootCommon,
    data => data.get('loaded') || false,
)

/*Get data config*/
export const getConfigs = createSelector(
    rootCommon,
    data => data.get('configs') || {},
)

// Select active currency
export const currencySelector = createSelector(
    rootCommon,
    data => data.get('currency') || DEFAULT_CURRENCY,
)

export const daysBeforeNewProductSelector = createSelector(
    rootCommon,
    data => data.getIn(['configs', 'isBeforeNewProduct']) || 5,
)

// select default initialCountry
export const getInitialCountry = createSelector(
    rootCommon,
    data => data.getIn(['configs', 'initialCountry']),
)

// select default currency
export const defaultCurrencySelector = createSelector(
    rootCommon,
    data => {
        return data.get('defaultCurrency')
    },
)

/*end get data config*/

/*Get data OnBoard*/
export const getDataOnBoard = createSelector(
    rootCommon,
    data => data.get('dataOnBoard') || {},
)

export const getHasOnBoard = createSelector(
    rootCommon,
    data => data.getIn(['configs', 'hasOnBoard']) || false,
)

export const getOnBoardLoaded = createSelector(
    rootCommon,
    data => data.get('onBoardLoaded') || false,
)
/*End get data OnBoard*/

/*Get data Home*/
export const getDataHome = createSelector(
    rootCommon,
    data => data.get('dataHome') || {},
)
/*End get data home*/

// Router screen when run app
export const routerMainSelector = createSelector(
    rootCommon,
    // isLoginSelector,
    // (data, isLogin) => data.getIn(['configs', 'requireLogin']) && !isLogin ? mainSwitch.AuthStack : mainSwitch.MainStack,
)

// Select list currency
export const listCurrencySelector = createSelector(
    rootCommon,
    data => data.get('currencies'),
)

// select common config
export const configsSelector = createSelector(
    rootCommon,
    data => data.get('configs'),
)