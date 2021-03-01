/* @import path
/*Selectors
import {getLangConfig , getNavigationConfig} from "~/Store/appSetting/selectors"
*/
/*
** getNavigationConfig(state)
** getLangConfig(state)
*/

import { createSelector } from 'reselect'

export const appSettingCommon = state => state.appSetting

export const getLangConfig = createSelector(
  appSettingCommon,
  data => data.get('i18n').toJS(),
)

export const getNavigationConfig = createSelector(
  appSettingCommon,
  data => data.get('navigation'),
)

export const getSlidersSelector = createSelector(
  appSettingCommon,
  data => data.get('storage').toJS()?.listSliders || [],
)
export const getPhoneSelector = createSelector(
  appSettingCommon,
  data => data.get('storage').toJS().phone,
)

export const getCategorySelector = createSelector(
  appSettingCommon,
  data => data.get('storage').toJS()?.listCategory || [],
)

export const getCountTimeLinelector = createSelector(
  appSettingCommon,
  data => data.get('storage').toJS()?.countTimeLine || null,
)