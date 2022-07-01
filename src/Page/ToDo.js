import React, { useState } from 'react';
import useTask from '../hook/useTask';
import NewTask from './NewTask';
import Modal from './Modal';
import './ToDo.css'

const ToDo = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [task] = useTask()
    console.log(task);
    return (
        <div className='todo-container'>
            <div className='task-area'>

                {
                    task.map(task => <NewTask
                        task={task}
                    ></NewTask>)
                }
            </div>
            <div className='new-task-create-area'>
                <button
                    className="openModalBtn"
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    <div className='add-my-task-icon'>
                        <div className='my-task-icon'>
                        </div>
                        <div>
                           <p className='font-bold'>+ Add New Task</p>
                        </div>
                    </div>
                </button>
            </div>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    );
};

export default ToDo;