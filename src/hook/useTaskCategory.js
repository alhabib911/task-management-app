import { useEffect, useState } from "react";


const useTaskCategory = () => {
    
    const [taskCategory, setTaskCategory] = useState([])
    useEffect(()=>{
        fetch('https://true-beaver-14261.herokuapp.com/categorydetails',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setTaskCategory(data))
    },[])
    
    return [taskCategory, setTaskCategory]
};

export default useTaskCategory;