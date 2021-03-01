import React from 'react'
import { Platform } from 'react-native'

/*Theme*/
import { useTheme } from 'react-native-paper'
import { DefaultTheme, DarkTheme } from '@react-navigation/native'

/* @react-navigation v5 */
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/*import config navigation*/
import * as screens from './navigation'
import { navigationSetting } from './navigation/BottomTabs/node_modules/~/Configs/navigator'
/*import lang*/
import * as Localization from 'expo-localization';

const Stack = createStackNavigator()

const StackNavigator = (props) => {
  const theme = useTheme()
  const lang = Localization.locale.split("-")[0];

  const initialRoute = navigationSetting.configs.initialRouteName
  const cardStyleConfig = navigationSetting.defaultNavigationOption.cardStyle

  /* StackNavigator  */
  const StackNavigators = navigationSetting.stacks

  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme

  const containerRef = React.useRef()

  /*Setting header bar */
  const getNavigationOptions = (theme, headerStyleDefault) => {
    const { headerStyle, headerTitleStyle } = headerStyleDefault.defaultNavigationOption
    return {
      gesturesEnabled: false,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: theme.colors.headerStyle.backgroundColor,
        ...headerStyle,
      },
      headerTintColor: theme.colors.headerStyle.headerTintColor,
      headerTitleStyle: {
        paddingTop: Platform.OS == 'android' ? 15 : 10,
        ...headerTitleStyle
      },
    }
  }

  return (
    <NavigationContainer theme={navigationTheme} ref={containerRef}>
      <Stack.Navigator initialRouteName={initialRoute}
        screenOptions={{ cardStyle: cardStyleConfig }}
      >
        {StackNavigators.map((stack) => {
          if (!Object.keys(screens).includes(stack.screen)) return null
          return (
            <Stack.Screen
              key={'screen' + stack.screen}
              name={stack.router}
              component={screens[stack.screen]}
              options={
                {
                  animationEnabled: stack.options && !stack.options.animationEnabled
                    ? stack.options.animationEnabled : true,
                  headerShown: stack.options && stack.options.headerShown
                    ? stack.options.headerShown
                    : false,
                  headerTitle: stack.title[lang],
                  ...getNavigationOptions(theme, navigationSetting)
                }
              }
            />
          )
        })}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
