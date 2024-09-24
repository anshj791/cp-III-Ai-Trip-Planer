import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTrip from '../../components/MyTrips/StartNewTrip';

export default function Mytrip() {
  const navigation = useNavigation();

  const [userTrips,setuserTrips] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
        navigation.setOptions({
            headerShown: false,
        });

        return () => {};
    }, [navigation])
  );
  return (
    <View style={{
      padding:25,
      paddingTop:45,

      backgroundColor:Colors.WHITE,
      height:'100%',

    }}>
      <View style={{
              alignContent:'center',
              justifyContent:'space-between',
              display:'flex',
              flexDirection:'row'
      }}>
      <Text style={{
        fontFamily:'outfit-B',
        fontSize:30,
      }}>My Trips</Text>
       <Ionicons name="add-circle-sharp" size={50} color="black" />
      </View>


       {userTrips?.length==0?
        <StartNewTrip/>:
        null
       }
    </View>
    
  )
}