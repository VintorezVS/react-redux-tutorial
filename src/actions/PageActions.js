import * as pageActions from '../constants/Page';
import $ from 'jquery';

let offset = 0;
let defaultCount = 200;
let cache = {
    photos: []
};

export function getPhotosByYear(year) {
    
    return function (dispatch) {
        dispatch({
            type: pageActions.GET_PHOTOS_REQUEST,
            payload: year
        });
        
        if (cache.photos && cache.photos.length) {
            handleSuccess(cache, year, dispatch);
        } else {
            try {
                getMorePhotos(offset, defaultCount, cache, year, dispatch);
            } catch (e) {
                dispatch({
                    type: pageActions.GET_PHOTOS_ERROR,
                    payload: new Error(e),
                    error: true
                });
            }
        }
    }
    
}

function getMorePhotos(offset, count, cache, year, dispatch) {
    VK.Api.call('photos.getAll', { extended: 1, count: count, offset: offset }, (resp) => {
        var uploadedPhotos = resp.response;
        if (uploadedPhotos.shift() > offset) { //uploadedPhotos[0] - full length is here
            cache.photos = cache.photos.concat(uploadedPhotos);
            getMorePhotos(offset + count, count, cache, year, dispatch);
        } else {
            handleSuccess(cache, year, dispatch);
        }
    });
}

function handleSuccess(cache, year, dispatch) {
    dispatch({
        type: pageActions.GET_PHOTOS_SUCCESS,
        payload: filterByYearPhotos(cache, year)
    });
}

function filterByYearPhotos(cache, year) {
    let filteredByYear = cache.photos
        .filter(photo =>
            year === 'ALL' || new Date(photo.created * 1000).getFullYear() === +year
        );

    filteredByYear.sort((a, b) => b.likes.count - a.likes.count);
    return filteredByYear;
}