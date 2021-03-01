import * as mockData from '~/MockData/common'
// import request from '../../Utils/Api';

// export const fetchSetting = () => request.get('/rnlab-app-control/v1/settings');
// export const fetchCountries = () => request.get('/wc/v3/data/countries');
// export const fetchPaymentGateways = () => request.get('/wc/v3/payment_gateways');

export const fetchSettingService = () => {
    //return fetchSetting()
    return mockData.fetchSettingService
}

