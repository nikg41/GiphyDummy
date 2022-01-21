import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStack } from './App/index';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}


export default App;