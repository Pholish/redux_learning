import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { middleware } from './enhancers/middleware';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, middleware),
    );
    return store;
}
