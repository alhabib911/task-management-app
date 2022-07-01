import React, { useState } from 'react';
import { MdEditNote } from 'react-icons/md';
import './TaskCategory.css'
import { ToastContainer, toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

const TaskCategorys = (props) => {
    const { _id, taskCategory } = props.taskCategory


    const [categoryNoteDetails, setCategoryNoteDetails] = useState([])
    const handleCategoryNote = event => {
        event.preventDefault()
        const categoryName = event.target.categoryName.value
        const date = event.target.date.value
        const title = event.target.title.value
        const tagline = event.target.tagline.value
        const note = event.target.note.value


        const categoryNoteDetails = { categoryName, date, title, tagline, note }
        setCategoryNoteDetails(categoryNoteDetails)



        fetch('https://true-beaver-14261.herokuapp.com/categorynotedetails', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(categoryNoteDetails)
        })
            .then(res => res.json())
            .then(() => {
                toast('Category Note Added');
                event.target.reset()
                window.location.reload();
            })
    }


    const handleTaskCategoryDelete = id => {
        const proceed = window.confirm('Do you want to delete this Category?')
        if (proceed) {
            console.log('delete', id);
            const url = `https://true-beaver-14261.herokuapp.com/categorydetails/${id}`
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
                    toast('Category Deleted');

                })
        }
    }
    return (
        <div className='task-category-area ml-10'>
            <div className='category-delete-btn'>
                <button onClick={() => handleTaskCategoryDelete(_id)}><MdDelete /></button>
            </div>
            <div class="dropdown dropdown-right">
                <label tabindex="0"> <div className='task-category-area'>

                    <div>
                        {taskCategory}
                    </div>
                    <div>
                        <MdEditNote />
                    </div>
                </div></label>
                <ul tabindex="0" class="category-task-input dropdown-content menu   bg-base-200 rounded-box w-72">
                    
                    <form onSubmit={handleCategoryNote}>
                        <input className='w-full my-2' value={taskCategory} type="text" name="categoryName" id="" placeholder='Category Name' required /> <br />
                        <input className='w-full my-2' type="date" name="date" id="" /> <br />
                        <input className='w-full mb-2' type="text" name="title" id="" placeholder='Title' /> <br />
                        <input className='w-full mb-2' type="text" name="tagline" id="" placeholder='Tagline' /> <br />
                        <input className='w-full mb-2' type="text" name="note" id="" placeholder='Note' /> <br />
                        <input className='w-full mb-2 category-task-save-btn' type="submit" value="Save" /> <br />
                    </form>
                </ul>
            </div>
            <ToastContainer />

        </div>
    );
};

export default TaskCategorys;