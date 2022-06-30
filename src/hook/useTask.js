import { useEffect, useState } from "react";


const useTask = () => {
    
    const [taks, setTask] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/task',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setTask(data))
    },[])
    
    return [taks, setTask]
};

export default useTask;