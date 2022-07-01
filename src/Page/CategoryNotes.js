import React from 'react';
import useTaskCategory from '../hook/useTaskCategory';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import './CategoryNote.css'
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const CategoryNotes = (props) => {
    const { _id, date, title, tagline, note, categoryName } = props.categoryNote

    const handleTaskCategorydetailsDelete = id => {
        const proceed = window.confirm('Do you want to delete this Note?')
        if (proceed) {
            console.log('delete', id);
            const url = `https://bearded-loon-96578.herokuapp.com/categorynotedetails/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                    }
                })
                .then(() => {
                    window.location.reload();
                    toast('Note Deleted');

                })
        }
    }


    return (
        <div className='category-note-details-ui'>

            <div className='flex justify-end'>
                <button className='text-red-600	' onClick={() => handleTaskCategorydetailsDelete(_id)}><MdDelete />
                </button>
            </div>
            <div >
                Category: {categoryName} <br />
                Date: {date} <br />
                Task: {title} <br />
                Title{tagline} <br />
                Note: {note}
            </div>
            <ToastContainer />
        </div>
    );
};

export default CategoryNotes;