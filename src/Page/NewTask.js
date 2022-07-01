import React, { useState } from 'react';
import './NewTask.css'
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';


const NewTask = (props) => {
    const { _id, taskValue, role } = props.task
    // const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate()
    const handleEditTask = (id) => {
        navigate(`/todo/${id}`)
    }


    const handleTaskDelete = id => {
        const proceed = window.confirm('Do you want to delete this task?')
        if (proceed) {
            console.log('delete', id);
            const url = `https://true-beaver-14261.herokuapp.com/task/${id}`
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
        navigate('/todo')
    }

    const makeComplete = id => {
        const proceed = window.confirm('Are you complete this task?')
        if (proceed) {

            fetch(`https://true-beaver-14261.herokuapp.com/task/complete/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload();
                    toast.success("That's great finish your task")
                })
        }
        navigate('/completed-tasks')
    }



    return (
        <div>

            {role !== 'completed' &&
                <div>
                    <label className='radio-field '>
                        <div className="radio-button">

                            <div>
                                {role !== 'completed' && <button onClick={() => makeComplete(_id)}><input type="radio" name="radio" id="" value={taskValue} />
                                    <span className='ml-3'>{taskValue}</span>
                                </button>}
                            </div>

                        </div>
                        <div className='edit-delete-icon'>
                            <div className='add-my-task-edit-icon'>
                                {role !== 'completed' && <button onClick={() => handleEditTask(_id)} type="submit"><TiEdit /></button>}



                            </div>
                            <div className='add-my-task-delete-icon'>
                                {role !== 'completed' && <button onClick={() => handleTaskDelete(_id)}><MdDelete /></button>}

                            </div>
                        </div>

                    </label>
                </div>}
            <ToastContainer />

        </div>
    );
};

export default NewTask;