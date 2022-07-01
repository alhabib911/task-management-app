import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import useUpdateUser from '../hook/useUpdateUser'
import auth from '../Firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [updateUser] = useUpdateUser()
    console.log(updateUser);

    console.log(user);

    return (
        <div className='dashboard-container'>
            <h2 className='profile-container-title'>My Profile</h2>
            <div className="user-info">
                <div className="user-name">
                    Name: {updateUser?.name || user.displayName}
                </div>
                <div className="user-email">
                    Email: {user.email}
                </div>
                <div className="user-phone">
                    Phone: {updateUser?.phone ||user.phoneNumber}
                </div>
                <div className="user-address">
                    Address: {updateUser?.address}
                </div>
            </div>
        </div>
    );
};

export default MyProfile;