import {ADD_RESUME, DEFAULT_RESUME, DELETE_RESUME} from './types';
import axios from 'axios'

export const addResume = resume => {
    return {
        type:ADD_RESUME,
        payload:resume
    }
}

/*export function defaultResume() {
    return async dispatch => {
        let res = await fetch('https://5f34067b9124200016e185b4.mockapi.io/resume')
        let result = await res.json();
        dispatch({type:ADD_RESUME,payload:result})
        
    }
}*/

export const deleteResume = id => {
    return {
        type:DELETE_RESUME,
        payload:id
    }
}

