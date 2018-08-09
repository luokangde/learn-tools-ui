import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as main from './main/reducer';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({
        ...main
    }),
    applyMiddleware(thunk)
);

export default store;