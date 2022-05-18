import {createStore} from "redux";
import {reducers} from './reducer/index';
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'persist-key',
    storage
}
const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer);
const persistor = persistStore(store)
export default store;
export {persistor}