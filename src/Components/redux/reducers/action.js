import {ADD_RESUME, DELETE_RESUME, EDIT_RESUME} from './types';
import axios from 'axios'

export const addResume = resume => {
    return {
        type:ADD_RESUME,
        payload:resume
    }
}

export const editResume = edit_resume => {
    return {
        type:EDIT_RESUME,
        payload:edit_resume
    }
}

export const deleteResume = id => {
    return {
        type:DELETE_RESUME,
        payload:id
    }
}

