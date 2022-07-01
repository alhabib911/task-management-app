import { useEffect, useState } from "react";


const useCategoryNote = () => {
    
    const [categoryNote, setCategoryNote] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categorynotedetails',{
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then (data=>setCategoryNote(data))
    },[])
    
    return [categoryNote, setCategoryNote]
};

export default useCategoryNote;