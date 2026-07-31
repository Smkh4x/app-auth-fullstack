import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import colors from '@/constants/colors'
import { House, HouseHeart, HouseHeartIcon } from 'lucide-react-native'


export default function _layout() {
  return (
   <Tabs>
    <Tabs.Screen name='home' options={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: colors.primary
      },
      tabBarIcon({color}) {
        <House />
      },
      }}/>
   </Tabs>
  )
}