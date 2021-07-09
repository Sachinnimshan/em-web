import {combineReducers} from 'redux';
import { userSignInReducer, userSignUpReducer } from './login/userReducer';


export default combineReducers({
    userSign: userSignInReducer,
    userSignUp: userSignUpReducer
});