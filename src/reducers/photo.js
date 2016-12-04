import * as photoActions from '../constants/Photo';

const initialState = {
    list: [],
    fetching: false
};

export default function photo(state = initialState, action) {
    switch (action.type) {
        case photoActions.GET_PHOTOS_REQUEST:
            return { ...state, list: [], fetching: true };
        case photoActions.GET_PHOTOS_SUCCESS:
            return { ...state, list: action.payload, fetching: false };
        case photoActions.GET_PHOTOS_ERROR:
            return { ...state, list: [], error: action.payload, fetching: false };
        default:
            return state;
    }
}