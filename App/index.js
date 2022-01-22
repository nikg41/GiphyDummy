import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import InitialScreen from './container/InitialScreen';
import MainScreen from './container/MainScreen';
import TrendingGifScreen from './container/TrendingGifScreen';
import TrendingStickersScreen from './container/TrendingStickersScreen';
import RegisterScreen from './container/RegisterScreen';
import SignInScreen from './container/SignInScreen';
import OtpScreen from "./container/OtpScreen";
import AccountScreen from './container/AccountScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (<Stack.Navigator
        screenOptions={{
            headerShown: false,
            animationEnabled: false
        }}
    >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="TrendingGifScreen" component={TrendingGifScreen} />
        <Stack.Screen name="TrendingStickersScreen" component={TrendingStickersScreen} />

    </Stack.Navigator>);
}
const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#59C6FA',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: '#252525',//color you want to change
                }
            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                animationEnabled: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Account') {
                        iconName = focused
                            ? 'account'
                            : 'account-outline';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen
                name="Account"
                component={AccountScreen} />
        </Tab.Navigator>
    );
};


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
            <Stack.Screen name="MainScreen" component={TabNavigator} />
            <Stack.Screen name="TrendingGifScreen" component={TrendingGifScreen} />
            <Stack.Screen name="TrendingStickersScreen" component={TrendingStickersScreen} />

        </Stack.Navigator>
    );
}

export { RootStack, TabNavigator };