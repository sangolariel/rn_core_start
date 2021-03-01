import { put, call, takeEvery } from 'redux-saga/effects';

import * as Actions from './constants';
import * as ActionsLanguage from '../language/actions';
import { fetchSettingService } from './service';

/**
 * Fetch setting
 * @returns {IterableIterator<*>}
 */
function* fetchSetting() {
    try {
        const result = yield call(fetchSettingService);
        const { setting, dataOnBoard, dataHome } = result;
        yield put({
            type: Actions.FETCH_SETTING_SUCCESS,
            payload: { setting, dataOnBoard, dataHome },
        });
        yield put({
            type: ActionsLanguage.setLanguage,
            payload: { language: setting.language, languages: setting.languages },
        });
    } catch (error) {
        yield put({
            type: Actions.FETCH_SETTING_ERROR,
        });
    }
}

export default function* commonSaga() {
    yield takeEvery(Actions.FETCH_SETTING, fetchSetting);
}
