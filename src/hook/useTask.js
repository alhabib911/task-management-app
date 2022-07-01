import { useEffect, useState } from "react";


const useTask = () => {
    
    const [task, setTask] = useState([])
    useEffect(()=>{
        fetch('https://true-beaver-14261.herokuapp.com/task',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setTask(data.reverse()))
    },[])
    
    return [task, setTask]
};

export default useTask;