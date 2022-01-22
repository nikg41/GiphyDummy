import { AppRegistry, LogBox } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'


const store = configureStore()
const persistor = persistStore(store);

const RNRedux = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
LogBox.ignoreAllLogs();