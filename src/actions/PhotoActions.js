import * as pageActions from '../constants/Photo';

let offset = 0;
let defaultCount = 200;
let cache = {
    photos: []
};

export function getPhotos() {
    
    return function (dispatch) {
        dispatch({
            type: pageActions.GET_PHOTOS_REQUEST
        });
        
        if (cache.photos && cache.photos.length) {
            handleSuccess(cache.photos, dispatch);
        } else {
            try {
                getMorePhotos(offset, defaultCount, cache, dispatch);
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

function getMorePhotos(offset, count, cache, dispatch) {
    VK.Api.call('photos.getAll', { extended: 1, count: count, offset: offset }, (resp) => {
        var uploadedPhotos = resp.response;
        if (uploadedPhotos.shift() > offset) { //uploadedPhotos[0] - full length is here
            cache.photos = cache.photos.concat(uploadedPhotos);
            getMorePhotos(offset + count, count, cache, dispatch);
        } else {
            handleSuccess(cache.photos, dispatch);
        }
    });
}

function handleSuccess(photos, dispatch) {
    dispatch({
        type: pageActions.GET_PHOTOS_SUCCESS,
        payload: photos.concat([])
    });
}

// function filterByYearPhotos(cache, year) {
//     let filteredByYear = cache.photos
//         .filter(photo =>
//             year === 'ALL' || new Date(photo.created * 1000).getFullYear() === +year
//         );
//
//     filteredByYear.sort((a, b) => b.likes.count - a.likes.count);
//     return filteredByYear;
// }