import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {userSignOut} from '../../store/login/userActions';
import {Avatar} from 'react-bootstrap';
import './header.css';
import {VscThreeBars} from 'react-icons/vsc';
import {CgClose} from 'react-icons/cg';
import {FaUserCircle} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import {sidebarData} from './NavbarData';

function Header() {
    const dispatch = useDispatch();
    const [sidebar, setsidebar] = useState(false);
    const userSign = useSelector(state => state.userSign);
    const {userInfo} = userSign;

    const showsidebar =()=> setsidebar(!sidebar);
    const closesidebar =()=> setsidebar(false);
    const userSignOutHandle=()=>{
        dispatch(userSignOut());
    }
    return (
        <div  className='nav-header container-fluid d-flex p-4 justify-content-between'>
            <div>
                <VscThreeBars onClick={showsidebar} className='icons'/>
            </div>
            <Fade left>
            <div className={sidebar ? 'side-menu active' : 'side-menu'}>
                        <div className='side-menu-profile-container'>
                            <div className='user-profile'>{(userInfo) ? (<><img src={userInfo.Profile} className='avatar'/>{" "}Hello{", "}{userInfo.Firstname}</>): (<><FaUserCircle className='icons'/>{" "}Hello, Sign In</>)}</div>   
                            <div><CgClose className='icons' onClick={closesidebar}/></div>
                        </div>
                        <div className='side-menu-container'>
                        {sidebarData.map((item)=>(
                                <div className='menu-item' key={item.Title} onClick={closesidebar}>
                                <Link to={item.Path} className={item.CName}>{item.Title}</Link>
                            </div>
                            )
                        )}
                        </div>
                </div>
            </Fade>
            
            <div className='d-flex gap-2'>
             {(userInfo) ? (<div><span className='user-info' onClick={userSignOutHandle}>{userInfo.Firstname}</span>
             {" "}<img src={userInfo.Profile} className='avatar'/></div>) : (<div><Link to='/login'><button type="button" className="btn btn-outline-primary mr-2">Log In</button></Link>
            <Link to='/register'><button type="button" className="btn btn-outline-primary">Sign Up</button></Link></div>)}
            </div>
        </div>
    )
}

export default Header;
