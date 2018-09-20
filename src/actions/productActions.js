import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from '../constants/constants';

export function fetchPosts(url) {
    return dispatch => {
        dispatch(fetchProductsBegin());
        return fetch(url)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                dispatch(fetchProductsSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchProductsFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = data => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data,
});

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error },
});
