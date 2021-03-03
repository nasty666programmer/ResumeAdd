import {combineReducers} from 'redux';
import dataReducer from './dataReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist-indexeddb-storage';


const storageConfig = {
    key: 'root',
    version:1,
    storage: storage('Resume'),
    whitelist:['resume']
}
const rootReducer = combineReducers({
    resume:dataReducer, 

})

export default persistReducer(storageConfig,rootReducer);