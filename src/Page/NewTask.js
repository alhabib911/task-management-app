import React, { useState } from 'react';
import './NewTask.css'
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { ToastContainer, toast } from 'react-toastify';


const NewTask = (props) => {
    const { _id, task } = props.task
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate()
    const handleAddProduct = (id) => {
        navigate(`/task/todo/${id}`)
    }


    const handleTaskDelete = id => {
        const proceed = window.confirm('Do you want to delete this task?')
        if (proceed) {
            console.log('delete', id);
            const url = `http://localhost:5000/task/${id}`
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
                    toast('Task Deleted');

                })
        }
        navigate('/task/todo')
    }
    return (
        <div>
            <div>
                <label className='radio-field'>
                    <div className="div">
                        <input type="radio" name="radio" id="" value={task} />
                        <span className='ml-3'>{task}</span>
                    </div>
                    <div className='edit-delete-icon'>
                        <div className='add-my-task-edit-icon'>
                            <button onClick={() => handleAddProduct(_id)} type="submit"><TiEdit /></button>
                        </div>
                        <div className='add-my-task-delete-icon'>
                            <button onClick={() => handleTaskDelete(_id)}><MdDelete /></button>
                        </div>
                    </div>

                </label>
            </div>
            <ToastContainer />

        </div>
    );
};

export default NewTask;