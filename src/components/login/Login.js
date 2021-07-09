import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {userSignIn} from '../../store/login/userActions';
import './Login.css';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import {FaUnlockAlt} from 'react-icons/fa';
import LoadingBox from '../shared/LoadingBox';
import MessageBox from '../shared/MessageBox';
import { Alert } from 'react-bootstrap';

function Login(props) {
    const dispatch = useDispatch();

    const userSign = useSelector((state)=> state.userSign);
    const {loading, success, errors, userInfo} = userSign;

    const redirect = '/';

    const [Email, setEmail]= useState('');
    const [Password, setPassword] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(userSignIn(Email, Password));
        clearForm();
    }

    const clearForm=()=>{
        setEmail('');
        setPassword('');
    }

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[props.history, redirect, userInfo]);

    return (
        <Fade top>
            <div className='container d-flex justify-content-center align-items-center mt-4'>
            <div className='card p-4 login-container'>
            <div className='container d-flex h4 mb-2 login-title'>
                <FaUnlockAlt/><span className='ml-1'>
                    SIGN IN</span></div>
            <div>
                <div className='container p-2'>{loading && (<LoadingBox></LoadingBox>)}
                    {errors && (<MessageBox>{errors}</MessageBox>)}
                    {success && (<Alert variant='success'>Login Successful</Alert>)}</div>
            
            <form onSubmit={handleSubmit}>

            <div className="mb-4">
            <input 
            type="email" 
            className="form-control py-4" 
            id="exampleFormControlInput1" 
            placeholder="Your Email / Username"
            value={Email}
            onChange={(e)=> setEmail(e.target.value)}/>
            </div>

            <div className="mb-4">
            <input 
            type="password" 
            className="form-control py-4" 
            id="exampleFormControlInput1" 
            placeholder="Your Password"
            value={Password}
            onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            <div className="mb-3">
                <button type='submit' className='btn btn-primary'>Log In</button>
            </div>
            <div><Link to='/register'>Dont' have an Account ?</Link></div>
            </form>
            </div>
            </div>
        </div>
        </Fade>
        
    )
}

export default Login;
