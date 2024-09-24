import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
  // Load the fonts and check if they are loaded
  const [fontsLoaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-M': require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-B': require('../assets/fonts/Outfit-Bold.ttf'),
  });

  // If the fonts are not loaded yet, return a loading screen or null
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{headerShown:false}}>
      {/* Render the tabs layout */}
      <Stack.Screen name="(tabs)"/>
    </Stack>
  );
}
