import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Colors } from '@/constants/Colors';

export default function SearchPlace() {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
        navigation.setOptions({
            headerShown: true,
            headerTranrent:true,
            headerTitle:'search'
        });

        return () => {};
    }, [navigation])
  );

      
    
  return (

    <View style={{
      height:'100%',
      backgroundColor:Colors.WHITE,
      padding:25,
      paddingTop:75
    }}>
   <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
    />
    </View>
  )
}