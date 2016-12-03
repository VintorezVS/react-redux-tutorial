import * as pageActions from '../constants/Page';

const initialState = {
    year: '2016',
    photos: [],
    fetching: false
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case pageActions.GET_PHOTOS_REQUEST:
            return { ...state, photos: [], year: action.payload, fetching: true };
        case pageActions.GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, fetching: false };
        case pageActions.GET_PHOTOS_ERROR:
            return { ...state, photos: [], error: action.payload, fetching: false };
        default:
            return state;
    }
}