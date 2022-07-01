import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';


const useUpdateUser = () => {
    const [user] = useAuthState(auth)
    const {email} =user
    // console.log(user);
    const [updateUser, setUpdateUser] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${email}`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then (data=>setUpdateUser(data))
    },[])
    return [updateUser, setUpdateUser];
};

export default useUpdateUser;