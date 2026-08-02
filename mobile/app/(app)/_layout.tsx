
import React from 'react'
import { Tabs } from 'expo-router'
import colors from '@/constants/colors'
import { House } from 'lucide-react-native'


export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen name='home' options={{
        headerShown: false,
        title: "Home",

        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          color: colors.white
        },
        tabBarStyle: {
          backgroundColor: colors.primary
        },
        tabBarIcon() {
          return <House color={colors.white} />;
        },
      }} />
    </Tabs>
  )
}