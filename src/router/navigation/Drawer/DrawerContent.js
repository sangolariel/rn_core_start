import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Text } from '~/Theme/Components'
import { padding } from '~/Theme/Configs/spacing'

import { PreferencesContext } from '~/Router/Context/PreferencesContext'

const LOGO = require('ASSETS/icon.png')
export const DrawerContent = (props) => {
  const { logo } = props
  const paperTheme = useTheme()
  const [isSwitchOn, setIsSwitchOn] = useState({ darkMode: false, rtl: false })
  const { rtl, theme, toggleRTL, toggleTheme } = useContext(
    PreferencesContext
  )
  const switchTheme = () => {
    setIsSwitchOn({
      ...isSwitchOn,
      darkMode: !isSwitchOn.darkMode
    })
    toggleTheme()
  }

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.branchInfomation}>
          <Avatar.Image
            source={logo ? logo : LOGO}
            size={50}
          />
          <View style={styles.branchName}>
            <Title style={styles.title}>ThePolo</Title>
            <Caption style={styles.caption}>thepololab@gmail.com</Caption>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Profile"
            onPress={() => { }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="tune" color={color} size={size} />
            )}
            label="Preferences"
            onPress={() => { }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={color}
                size={size}
              />
            )}
            label="Bookmarks"
            onPress={() => { }}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={switchTheme}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch color={paperTheme.colors.primary} value={isSwitchOn.darkMode} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={toggleRTL}>
            <View style={styles.preference}>
              <Text>RTL</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  branchInfomation: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: padding.large,
    paddingTop: padding.small
  },
  branchName: {
    paddingLeft: padding.small,
  },
  title: {
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})