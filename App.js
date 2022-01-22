import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStack, TabNavigator } from './App/index';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();

function App() {
  let loggedIn = useSelector(state => state.userDetails.isLoggedIn)
  return (
    <NavigationContainer>
      {loggedIn ? <TabNavigator /> : <RootStack />}

    </NavigationContainer>
  );
}


export default App;