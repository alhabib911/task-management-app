import React, { useState } from 'react';
import './NewTask.css'
import TodoEditModal from './TodoEditModal';
import { useNavigate } from 'react-router-dom';


const NewTask = (props) => {
    const { _id, task } = props.task
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate()
    const handleAddProduct = (id) => {
        navigate(`/task/todo/${id}`)
    }
    return (
        <div>
            <div>
                <label className='radio-field'>
                    <div className="div">
                        <input type="radio" name="radio" id="" value={task} />
                        <span className='ml-3'>{task}</span>
                    </div>
                    <div className='add-my-task-icon'>
                        <button onClick={() => handleAddProduct(_id)} type="submit">Edit</button>
                    </div>

                </label>
            </div>

        </div>
    );
};

export default NewTask;