import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InitialScreen from './container/InitialScreen';
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
        </Stack.Navigator>
    );
}

export { RootStack };