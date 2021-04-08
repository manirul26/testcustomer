/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 //import { NavigationContainer } from '@react-navigation/native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 
 import {
 Icon
 } from 'native-base';
 import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugInstructions,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import Dashboard from './src/components/Dashboard'
import foodlist from './src/components/foodlist'
 
 
 /*
 function HomeScreen() {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Home Screen</Text>
     </View>
   );
 }
 */
 
 const Stack = createStackNavigator();
 
 function App() {
   return (
     <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
     <Stack.Screen name="foodlist" component={foodlist} options={{ headerShown: false }}/>
     
     </Stack.Navigator>
   </NavigationContainer>
   );
 }
 
 export default App;