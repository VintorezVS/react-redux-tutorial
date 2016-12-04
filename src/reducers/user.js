import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from '../constants/User';

const initialState = {
    name: '',
    isAuthenticated: false,
    error: ''
};

export default function user(state = initialState, action) {
    
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, name: action.payload, isAuthenticated: true, error: '' };
        
        case LOGIN_FAIL:
            return { ...state, error: action.payload.message };
        
        case LOGOUT_SUCCESS:
            return { ...state, name: '', isAuthenticated: false };
        
        default:
            return state;
    }
}