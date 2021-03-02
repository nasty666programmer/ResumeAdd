import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import dataReducer from './dataReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist-indexeddb-storage';
import localforage from 'localforage';

const storageConfig = {
    key: 'root',
    version:1,
    storage: storage('Resume'),
    whitelist:['resume']
}
const rootReducer = combineReducers({
    resume:dataReducer, 
    form:formReducer
})

export default persistReducer(storageConfig,rootReducer);