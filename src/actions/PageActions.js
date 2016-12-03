import * as pageActions from '../constants/Page';
import $ from 'jquery';

export function getPhotosByYear(year) {

    return (dispatch) => {
        dispatch({
            type: pageActions.GET_PHOTOS_REQUEST,
            payload: year
        });

        setTimeout(function () {
            $.ajax('/photos/' + year).then((resp) => {
                dispatch({
                    type: pageActions.GET_PHOTOS_SUCCESS,
                    payload: JSON.parse(resp).photos
                });
            }).catch((resp) => {
                dispatch({
                    type: pageActions.GET_PHOTOS_ERROR,
                    payload: JSON.parse(resp),
                    error: true
                });
            });
        }, 1000);
    }

}