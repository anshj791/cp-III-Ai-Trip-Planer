import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';


export default function Login() {
  const fadeAnimTitle = useRef(new Animated.Value(0)).current; // Animation for the title
  const fadeAnimSubtitle = useRef(new Animated.Value(0)).current; // Animation for the subtitle
  const scaleAnim = useRef(new Animated.Value(1)).current; // Animation for button tap


  useEffect(() => {
    // Start the fade-in animation for the title
    Animated.timing(fadeAnimTitle, {
      toValue: 1, // Fully visible
      duration: 700, // Duration of 1.5 seconds
      useNativeDriver: true,
    }).start();

    // Start the fade-in animation for the subtitle with a delay
    Animated.timing(fadeAnimSubtitle, {
      toValue: 1, // Fully visible
      duration: 800, // Duration of 1.5 seconds
      delay: 500, // Start after 0.5 seconds
      useNativeDriver: true,
    }).start();

  }, [fadeAnimTitle, fadeAnimSubtitle]);
  

  return (
    <View>
      <Image
        source={require('../assets/images/Login.jpg')}
        style={{
          width: '100%',
          height: 450,
          objectFit:'cover'
        }}
      />
      <View style={styles.container}>
        <Animated.Text
          style={[
            {
              fontSize: 25,
              marginTop:20,
              fontFamily: 'outfit-B',
              textAlign: 'center',
              opacity: fadeAnimTitle, // Bind opacity to title animation
            },
          ]}
        >
          Tripiyo
        </Animated.Text>
        <Animated.Text
          style={[
            {
              fontSize: 14,
              fontFamily: 'outfit',
              textAlign: 'center',
              padding: 8,
              color: Colors.GRAY,
              opacity: fadeAnimSubtitle, // Bind opacity to subtitle animation
            },
          ]}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-driven insights.
        </Animated.Text>


        <TouchableOpacity style={styles.button}
          onPress={()=>router.push('auth/sign-in')}
        >
        <Text style={{
            color:Colors.WHITE,
            fontFamily:'outfit-M',
            textAlign:'center',
            fontSize:14
        }}  >
            Let's Start
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 15,
    elevation: 99
  },
  button:{
   marginTop:'30%',
   color:Colors.WHITE,
   backgroundColor:Colors.PRIMARY,
   fontSize:14,
   fontWeight:'700',
   padding:20,
   textAlign:'center',
   borderRadius:99,
  }

});
