import { combineReducers } from 'redux';
import pageReducer from './page';
import dataReducer from './data';

export const rootReducer = combineReducers({
    page: pageReducer,
    data: dataReducer,
});
