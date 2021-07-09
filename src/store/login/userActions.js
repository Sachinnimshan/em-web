import {USER_SIGN_REQUEST, USER_SIGN_SUCCESS, USER_SIGN_FAIL,
        USER_SIGN_UP_REQUEST, USER_SIGN_UP_SUCCESS, USER_SIGN_UP_FAIL, USER_SIGN_OUT} from './userConstants';
import axios from 'axios';

export const userSignIn=(Email, Password)=>async(dispatch)=>{
    dispatch({type: USER_SIGN_REQUEST, payload: {Email, Password}})
    try{
        const {data} = await axios.post('/users/sign', {Email,Password});
        dispatch({type: USER_SIGN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    }catch(err){
        dispatch({type: USER_SIGN_FAIL, payload: err.message});
    }
}

export const userSignOut=()=>async(dispatch)=>{
    localStorage.removeItem('userInfo');
    dispatch({type: USER_SIGN_OUT});

}


export const userRegister=(newuser)=>async(dispatch)=>{
    dispatch({type: USER_SIGN_UP_REQUEST, payload: newuser});
    try{
        const {data} = await axios.post('/users/register', newuser);
        dispatch({type: USER_SIGN_UP_SUCCESS, payload: (data)});
        dispatch({type: USER_SIGN_SUCCESS, payload: data});
        localStorage.setItem("userInfo", JSON.stringify(data));
    }catch(error){
        dispatch({type: USER_SIGN_UP_FAIL, payload: error.message});
    }
}