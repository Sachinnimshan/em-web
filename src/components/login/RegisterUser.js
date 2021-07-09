import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom';
import {FaUnlockAlt} from 'react-icons/fa';
import {userRegister} from '../../store/login/userActions';
import {useSelector, useDispatch} from 'react-redux';
import LoadingBox from '../shared/LoadingBox';
import MessageBox from '../shared/MessageBox';
import { Alert } from 'react-bootstrap';
import FileBase from 'react-file-base64';

function RegisterUser(props) {
    const dispatch = useDispatch();
    const redirect = '/';

    const userSignUp = useSelector(state => state.userSignUp);
    const {loading, success, errors, userInfo} = userSignUp;

    const [userData, setuserData] = useState({
        Firstname: '',
        Lastname: '',
        Email: '',
        Contact_Number: '',
        Password: '',
        ConfirmPassword: '',
        Profile: '',
        Country: '',
        User_ID: '',
        Status: ''
    });

    const clearForm=()=>{
        setuserData({Firstname: '',Lastname:'', Email: '', Contact_Number:'',
    Password: '', ConfirmPassword: '', Profile: '', Country: '', User_ID: '', Status: ''})
    }

    const handleRegister=(e)=>{
        e.preventDefault();
        if(userData.Firstname === "" && userData.Lastname === "" && userData.Email ==="" &&
        userData.Contact_Number === "" && userData.Password === "" && userData.ConfirmPassword === "" 
        && userData.Profile === "" && userData.Country === "" && userData.User_ID === "" && userData.Status === ""){
            alert("Fields Are Required");
        }
        if(userData.Password !== userData.ConfirmPassword){
            alert("Passwords Do Not Matched");
        }else{
            dispatch(userRegister(userData));
        }
        clearForm();
    }

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[props.history, redirect, userInfo]);

    return (
        <div>
            <Fade top>
            <div className='container d-flex justify-content-center align-items-center mt-4'>
            <div className='card p-4 register-container'>
            <div className='container d-flex h4 mb-2 login-title'>
            <FaUnlockAlt/><span className='ml-1'>
            SIGN UP</span></div>
            <div className='container p-2'>{loading && (<LoadingBox></LoadingBox>)}
                    {errors && (<MessageBox>{errors}</MessageBox>)}
                    {success && (<Alert variant='success'>Your Account Created Successfully</Alert>)}</div>
            <div>
            <form onSubmit={handleRegister}>
            <div className="mb-3">
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="First Name"
            value={userData.Firstname}
            onChange={(e)=> setuserData({...userData, Firstname: e.target.value})}/></div>

            <div className="mb-3">
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Last Name"
            value={userData.Lastname}
            onChange={(e)=> setuserData({...userData, Lastname: e.target.value})}/></div>

            <div className="mb-3">
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Email"
            value={userData.Email}
            onChange={(e)=> setuserData({...userData, Email: e.target.value})}/></div>

            <div className="mb-3">
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Contact Number"
            value={userData.Contact_Number}
            onChange={(e)=> setuserData({...userData, Contact_Number: e.target.value})}/></div>

            <div className="mb-3">
            <input 
            type="password" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Password"
            value={userData.Password}
            onChange={(e)=> setuserData({...userData, Password: e.target.value})}/></div>

            <div className="mb-3">
            <input 
            type="password" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Confirm Password"
            value={userData.ConfirmPassword}
            onChange={(e)=> setuserData({...userData, ConfirmPassword: e.target.value})}/></div>

            <div className="mb-3">
            <label for="myfile">Select a file:</label>
            <FileBase type='file' multiple={false} onDone={({base64})=> setuserData({...userData, Profile: base64})}/></div>

            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Select Your Country</label>
            <select 
            className="form-control"  
            placeholder="Select Your Country" 
            value={userData.Country}
            onChange={(e)=> setuserData({...userData, Country: e.target.value})}>
                <option>Sri Lanka</option>
                <option>US</option>
                <option>England</option>
            </select></div>

            <div className="mb-3">
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="User ID"
            value={userData.User_ID}
            onChange={(e)=> setuserData({...userData, User_ID: e.target.value})}/></div>

            <div className="mb-3">
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput1" 
            placeholder="Status"
            value={userData.Status}
            onChange={(e)=> setuserData({...userData, Status: e.target.value})}/></div>

            <div className="mb-3">
            <button type='submit' className='btn btn-primary'>Register</button>
            </div>

            </form>
            <div><Link to='/register'>Have an Account ?</Link></div>
            </div>
            </div>
        </div>
        </Fade>
        </div>
    )
}

export default RegisterUser;
