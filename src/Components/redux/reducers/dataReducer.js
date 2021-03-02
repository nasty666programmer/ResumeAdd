import {ADD_RESUME, DEFAULT_RESUME, DELETE_RESUME} from './types';

const initialState = {
    resume:[]
}

const dataReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_RESUME:
            return { ...state, resume: state.resume.concat(action.payload)}
            // return {...state,resume:[state.resume, action.payload]}
            break;
        case DELETE_RESUME:
            return {...state,resume:state.resume.filter(el => el.id != action.payload)}
            break;
        default: return state
            break;
    }
}

export default dataReducer;