import { combineReducers } from 'redux'
import photo from './photo'
import user from './user'
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    photo,
    user,
    routing: routerReducer
});