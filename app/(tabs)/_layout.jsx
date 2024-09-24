import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '@/constants/Colors';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
       <Tabs screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
       }} >
        <Tabs.Screen name='mytrip'
          options={{
            tabBarLabel:'My Trip',
            tabBarIcon:({color})=><MaterialCommunityIcons name="bag-suitcase" size={24} color="black" color={color} />,
          }}
        /> 
        <Tabs.Screen name='discover'
        options={{
          tabBarLabel:'Discover',
          tabBarIcon:({color})=><Fontisto name="world" size={24} color="black" color={color} />,
        }}
        />
        <Tabs.Screen name='profile'
        options={{
          tabBarLabel:'Profile',
          tabBarIcon:({color})=><Ionicons name="people" size={24} color="black" color={color} />,

        }}
        />

       </Tabs>
  )
}