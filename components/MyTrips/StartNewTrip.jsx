import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useExpoRouter } from 'expo-router/build/global-state/router-store';


export default function StartNewTrip() {

   const router = useExpoRouter();
  return (
    <View style={{
        display:'flex',
        padding:25,
        marginTop:45,
        gap:20,
        alignItems:'center'
       
    }} > 
    <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={{
        fontFamily:'outfit-M',
        fontSize:20

      }}>No Any Trip Plan Yet</Text>
      <Text style={{
        fontFamily:'outfit',
        textAlign:'center',
        color:Colors.GRAY,
        width:250
      }}>Looks like its time to plan a new travel experinece! Get Started below</Text>
      
        <TouchableOpacity  onPress={()=>router.push('/create-trip/search-place')}
         style={{
              padding:15,
              backgroundColor:Colors.PRIMARY,
              width:'70%',
              borderRadius:99,
              alignItems:'center'
        }}><Text style={{color:Colors.WHITE,
             fontFamily:'outfit',
             fontWeight:'800',
        }}>Plan A Trip</Text>
        
        </TouchableOpacity>
    </View>
  )
}