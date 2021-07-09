import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {userSignOut} from '../../store/login/userActions';
import {Avatar} from 'react-bootstrap';
import './header.css';
import {VscThreeBars} from 'react-icons/vsc';
import {CgClose} from 'react-icons/cg';
import {FaUserCircle} from 'react-icons/fa';
import {Fade} from 'react-bootstrap/Fade';
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
        <div className='container-fluid d-flex p-4 bg-light justify-content-between'>
            <div>
                <VscThreeBars onClick={showsidebar} className='icons'/>
            </div>
            <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
                    <ul className='container nav-items'>
                        <li className='nav-item'>
                        {(userInfo) ? (<><FaUserCircle className='icons'/>{" "}Hello{", "}{userInfo.Firstname}</>): (<><FaUserCircle className='icons'/>{" "}Hello, Sign In</>)}   
                            {"  "}<CgClose className='icons' onClick={closesidebar}/></li>
                        {sidebarData.map((item)=>{
                            return(
                                <li className='nav-item' key={item.Title} onClick={closesidebar}>
                                <Link to={item.Path} className={item.CName}>{item.Title}</Link>
                            </li>
                            );
                        })}
                    </ul>
                </nav>
            <div className='d-flex gap-2'>
             {(userInfo) ? (<div><span onClick={userSignOutHandle}>{userInfo.Firstname}</span>
             {" "}<img src={userInfo.Profile} className='avatar'/></div>) : (<div><Link to='/login'><button type="button" className="btn btn-outline-primary mr-2">Log In</button></Link>
            <Link to='/register'><button type="button" className="btn btn-outline-primary">Sign Up</button></Link></div>)}
            </div>
        </div>
    )
}

export default Header;
