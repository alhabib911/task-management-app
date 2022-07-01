import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase.init';
import { BiLogOut } from 'react-icons/bi';
import { BsClipboardCheck } from 'react-icons/bs';
import { signOut } from 'firebase/auth';
import './Navbar.css'


const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className='navbar-container'>
            <div class="navbar-area navbar bg-base-300">
                <div class="navbar-start">
                    <BsClipboardCheck/>
                    <Link className='text-xl pl-2' to='/task'>Task Board</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <p className='font-semibold text-emerald-900 text-2xl'>Task Management App</p>
                   
                </div>
                <div class="navbar-end">
                {
                        user ?
                            <div class="dropdown">
                                <label tabindex="0" className='flex items-center'>
                                    <span className='mr-4'><img className='profile-img w-8' src={user?.photoURL} alt="" /></span>
                                    { user?.displayName || user?.email}
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/task/profile'>My Account</Link></li>
                                    <li><Link to='/task/profile-edit'>Manage Account</Link></li>
                                    <li>
                                        {
                                            user ?
                                                <Link to='/login' onClick={handleSignOut}><BiLogOut /><span>Log Out</span></Link>
                                                :
                                                <Link to='/login'><span>Login/Register</span></Link>
                                        }
                                    </li>
                                </ul>
                            </div>
                            :
                            <span><img className='profile-img w-8' src={user?.photoURL} alt="" /></span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;