import AsyncStorage from '@react-native-community/async-storage'

export const getUserToken = async () => await AsyncStorage.getItem('userToken')
