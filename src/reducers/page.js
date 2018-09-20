import { SET_LIMIT } from '../constants/constants';

const initialState = {
    limit: 9,
};

export default function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LIMIT:
            return { ...state, limit: action.payload };
        default:
            return state;
    }
}
