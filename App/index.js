import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from './container/InitialScreen';
import MainScreen from './container/MainScreen';
import TrendingGifScreen from './container/TrendingGifScreen';
import TrendingStickersScreen from './container/TrendingStickersScreen';
const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animationEnabled: false
            }}
        >
            <Stack.Screen name="InitialScreen" component={InitialScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="TrendingGifScreen" component={TrendingGifScreen} />
            <Stack.Screen name="TrendingStickersScreen" component={TrendingStickersScreen} />
        </Stack.Navigator>
    );
}

export { RootStack };