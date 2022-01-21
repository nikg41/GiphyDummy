import giphyDatareducer from "./giphyDatareducer";
import userDetailsreducer from "./userDetailsreducer";
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const userDetailsCongig = {
    key: 'userDetails',
    storage: AsyncStorage,
}
export default {
    giphyData: giphyDatareducer,
    userDetails: persistReducer(userDetailsCongig, userDetailsreducer)
}