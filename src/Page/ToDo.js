import React, { useState } from 'react';
import useTask from '../hook/useTask';
import NewTask from './NewTask';
import Modal from './Modal';
import './ToDo.css'
import ModalCategoryCreator from './ModalCategoryCreator';
import useTaskCategory from '../hook/useTaskCategory';
import TaskCategorys from './TaskCategorys';
import useCategoryNote from '../hook/useCategoryNote';
import CategoryNotes from './CategoryNotes';

const ToDo = () => {
    const [taskCategory] = useTaskCategory()
    const [modalOpen, setModalOpen] = useState(false);
    const [task] = useTask()
    console.log(task);
    const [categoryNote] = useCategoryNote()
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
                <div>
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
                                <p className='font-bold'>+ Add New Task Category</p>
                            </div>
                        </div>

                    </button>
                </div>
                <div className="my-task-catagory">
                    {
                        taskCategory.map(taskCategory => <TaskCategorys
                            taskCategory={taskCategory}
                        ></TaskCategorys>)
                    }
                </div>
                <div className="category-note-details">
                    {
                        categoryNote.map(categoryNote => <CategoryNotes
                            categoryNote={categoryNote}
                        ></CategoryNotes>)
                    }
                </div>
            </div>
            {modalOpen && <ModalCategoryCreator setOpenModal={setModalOpen} />}
        </div>
    );
};

export default ToDo;