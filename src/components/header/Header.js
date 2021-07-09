import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {userSignOut} from '../../store/login/userActions';


function Header() {
    const dispatch = useDispatch();
    const userSign = useSelector(state => state.userSign);
    const {userInfo} = userSign;

    const userSignOutHandle=()=>{
        dispatch(userSignOut());
    }
    return (
        <div className='container-fluid d-flex p-4 bg-light justify-content-between'>
            <div>Navbar</div>
            <div className='d-flex gap-2'>
             {(userInfo) ? (<span onClick={userSignOutHandle}>{userInfo.Firstname}</span>) : (<div><Link to='/login'><button type="button" className="btn btn-outline-primary mr-2">Log In</button></Link>
            <Link to='/register'><button type="button" className="btn btn-outline-primary">Sign Up</button></Link></div>)}
            </div>
        </div>
    )
}

export default Header;
