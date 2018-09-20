import { SET_LIMIT } from '../constants/constants';

export function setLimit(limit) {
    return {
        type: SET_LIMIT,
        payload: limit,
    };
}
