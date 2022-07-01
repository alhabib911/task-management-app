import React, { useState } from 'react';
import './ModalCategoryCreator.css'
import { ToastContainer, toast } from 'react-toastify';

const ModalCategoryCreator = ({ setOpenModal }) => {
    const [categoryDetails, setCategoryDetails] = useState([])
    const handleAddCategory = event => {
        event.preventDefault()
        const taskCategory = event.target.taskCategory.value
       

        const categoryDetails = { taskCategory}
        setCategoryDetails(categoryDetails)



        fetch('https://true-beaver-14261.herokuapp.com/categorydetails', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(categoryDetails)
        })
            .then(res => res.json())
            .then(() => {
                toast('Task Category Added');
                event.target.reset()
                window.location.reload();
            })
    }
    return (
        <div>
            <div className="">
                <div className="camodalContainer">
                    <div className="catitleCloseBtn">
                        <button
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        >
                            Close
                        </button>
                    </div>
                    <div className="title">
                        <h1>Add Task Category</h1>
                    </div>
                    <form onSubmit={handleAddCategory} className="modal-form">
                        <input type="text" name="taskCategory" placeholder="New Task" required />
                        <input className="modal-submit-btn" type="submit" value="Save" />
                    </form>

                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default ModalCategoryCreator;