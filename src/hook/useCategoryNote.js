import { useEffect, useState } from "react";


const useCategoryNote = () => {
    
    const [categoryNote, setCategoryNote] = useState([])
    useEffect(()=>{
        fetch('https://true-beaver-14261.herokuapp.com/categorynotedetails',{
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