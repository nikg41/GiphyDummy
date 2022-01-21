import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from './container/InitialScreen';
import MainScreen from './container/MainScreen';
import TrendingGifScreen from './container/TrendingGifScreen';
import TrendingStickersScreen from './container/TrendingStickersScreen';
import RegisterScreen from './container/RegisterScreen';
import SignInScreen from './container/SignInScreen';
import OtpScreen from "./container/OtpScreen";

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
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="TrendingGifScreen" component={TrendingGifScreen} />
            <Stack.Screen name="TrendingStickersScreen" component={TrendingStickersScreen} />

        </Stack.Navigator>
    );
}

export { RootStack };