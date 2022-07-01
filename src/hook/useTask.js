import { useEffect, useState } from "react";


const useTask = () => {
    
    const [task, setTask] = useState([])
    useEffect(()=>{
        fetch('https://bearded-loon-96578.herokuapp.com/task',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setTask(data))
    },[])
    
    return [task, setTask]
};

export default useTask;