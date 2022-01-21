import { createStore, combineReducers } from 'redux';
import reducers from './App/reducers';
const rootReducer = combineReducers(
    reducers
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;