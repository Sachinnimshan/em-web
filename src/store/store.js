import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';


const initialState = {
    userSign: {
        userInfo: localStorage.getItem('userInfo') ?
        JSON.parse(localStorage.getItem('userInfo')): null,
    }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;

