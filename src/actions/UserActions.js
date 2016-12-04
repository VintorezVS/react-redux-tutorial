import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from '../constants/User';
import { push, replace } from 'react-router-redux';
import { PHOTO, INDEX } from '../constants/Routes';

export function handleLogin(loggedUserId) {
    
    return function (dispatch) {
        
        dispatch({
            type: LOGIN_REQUEST
        });
        
        if (typeof loggedUserId === 'string') {
            VK.Api.call('users.get', { uid: loggedUserId }, (resp) => {
                handleLoginResponse(resp.response[0], dispatch);
            });
        } else {
            VK.Auth.login((resp) => {
                handleLoginResponse(resp, dispatch);
            }, 4);
        }
    };
    
}

export function handleLogout() {
    return function (dispatch) {
        VK.Auth.logout(function () {
            dispatch({
                type: LOGOUT_SUCCESS
            });
            dispatch(push(INDEX));
        });
    }
    
}

function handleLoginResponse(resp, dispatch) {
    let name = resp.session && resp.session.user && resp.session.user.first_name || resp.first_name;
    if (name) {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: name
        });
        dispatch(replace(PHOTO));
    } else {
        dispatch({
            type: LOGIN_FAIL,
            error: true,
            payload: new Error('Ошибка авторизации')
        });
    }
}