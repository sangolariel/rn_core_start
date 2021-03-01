import { Dimensions, NativeModules, Platform, } from 'react-native'

const X_WIDTH = 375
const X_HEIGHT = 812

const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

const { height, width } = Dimensions.get('window')
const { StatusBarManager } = NativeModules
export const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false


export const StatusBarHeight = Platform.select({
    ios: isIPhoneX() ? 44 : 20,
    android: StatusBarManager.HEIGHT,
    default: 0
})

export const _checkShowNavigationBar = () => {
    if (Platform.OS === 'android') {
        let heightBar = Dimensions.get('screen').height - Dimensions.get('window').height
        return heightBar
    }
    return 0
}

export const heightScreenReal = () => {
    return Dimensions.get('window').height
}