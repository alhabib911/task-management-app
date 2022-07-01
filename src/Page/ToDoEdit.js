import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useTask from '../hook/useTask';
import { ToastContainer, toast } from 'react-toastify';
import './TodoEditModal.css'
import { DayPicker, useInput } from 'react-day-picker';
import useUpdateTask from '../hook/useUpdateTask';
import { useNavigate } from 'react-router-dom';


const ToDoEdit = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [task] = useTask()
    const {_id} = task
    const singleTask = task.find((task) => task._id == id)
    console.log(singleTask);
    const handelTaskUpdate = event => {
        event.preventDefault()
        const title = event.target.title.value
        const details = event.target.details.value
        const date = event.target.date.value
        // const time = event.target.time.value

        const updateTask = { title, details, date }



        const url = `https://true-beaver-14261.herokuapp.com/task/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Congratulations Task Updated');
                window.location.reload();
                event.target.reset()
            })

    }
    const { inputProps, dayPickerProps } = useInput({
        defaultSelected: new Date(),
        fromYear: 2020,
        toYear: 2022,
        format: 'PP',
        required: true
    });

    const [updateTask] = useUpdateTask()
    console.log(updateTask);



    return (
        <div className='update-task-container'>
            <div className='task-details'>
                <div className="task-details-area">
                    
                    Task Pick Date: {singleTask?.date || updateTask?.date} <br />
                    Task: {singleTask?.taskValue || updateTask?.taskValue} <br />
                    Task Title: {singleTask?.title || updateTask?.title} <br />
                    Task Details: {singleTask?.details || updateTask?.details}
                </div>
            </div>
            <form onSubmit={handelTaskUpdate} className="todo-edit-modal-form">
                <div className='input-daypicker'>
                    <div>
                        <input type="text" name="title" id="" placeholder='Title' />
                        <textarea name="details" id="" maxlength="45" placeholder='Add Details'></textarea>
                    </div>
                    <div className='day-picker'>
                        <label>
                            <input
                                name='date'
                                {...inputProps}
                                className="input-reset pa2 ma2 bg-white black ba"
                            />
                        </label>

                        <DayPicker {...dayPickerProps} footer={ToDoEdit} />;
                    </div>
                </div>
                <input className='todo-edit-btn' type="submit" value="Save" />
            </form>

            <ToastContainer />

        </div>
    );
};

export default ToDoEdit;