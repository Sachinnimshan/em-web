import {USER_SIGN_REQUEST, USER_SIGN_SUCCESS, USER_SIGN_FAIL, 
    USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS, USER_SIGN_UP_FAIL, USER_SIGN_OUT} from './userConstants';

export const userSignInReducer=(state={}, action)=>{
    switch(action.type){
        case USER_SIGN_REQUEST:
            return {loading: true};
        case USER_SIGN_SUCCESS:
            return {loading: false, success: true, userInfo: action.payload};
        case USER_SIGN_FAIL:
            return {loading:false, errors: action.payload};
        case USER_SIGN_OUT:
                return {};
        default:
            return state;
    }
}

export const userSignUpReducer=(state={}, action)=>{
    switch(action.type){
        case USER_SIGN_UP_REQUEST:
            return {loading: true};
        case USER_SIGN_UP_SUCCESS:
            return {loading: false, succes: true, userInfo: action.payload};
        case USER_SIGN_UP_FAIL:
            return {loading: false, errors: action.payload};
        default:
            return state;
    }
}