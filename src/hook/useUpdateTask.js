import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const useUpdateTask = () => {
    const { id } = useParams()

    const [updateTask, setUpdateTask] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/task/${id}`,{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then (data=>setUpdateTask(data))
    },[])
    return [updateTask, setUpdateTask];
};

export default useUpdateTask;