import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {StatusBar} from 'react-native';

import OnboardScreen from './screens/onboardScreen';
import BottomNavigator from './navigation/BottomNavigation';
import HomeScreen from './screens/HomeScreen';



export default function RootLayout() {


  return (
   <Stack>
    <Stack.Screen name='(tabs)' options={{headerShown: false}} />
   </Stack>
 
  );


}
