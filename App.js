import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './components/screens/Home'
import Mycart from './components/screens/Mycart'
import Productinfo from './components/screens/Productinfo'

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false,}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Mycart' component={Mycart}/>
        <Stack.Screen name='Productinfo' component={Productinfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App