import React from 'react';
import './CompleteTask.css'
import { CgTrash } from 'react-icons/cg';
import { BsBoxArrowRight } from 'react-icons/bs';
import { BiDownArrowAlt } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';


const CompleteTask = ({ task }) => {
    const { _id, role, taskValue, details, date, title } = task
    const GoBackTouch = id => {
        const proceed = window.confirm('Do you want to make Not Complete Task?')
        if (proceed) {

            fetch(`https://true-beaver-14261.herokuapp.com/task/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload();
                    toast.success("Let's change to finish the task")
                })
        }
    }


    const handleTaskDelete = id => {
        const proceed = window.confirm('Do you want to delete this task?')
        if (proceed) {
            console.log('delete', id);
            const url = `https://true-beaver-14261.herokuapp.com/task/complete/${id}`
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
    }
    return (
        <div>
            {role === 'completed' && 
            <div className='w-8/12 mx-auto mt-2 '>
                <div class="collapse">
                    <input type="checkbox" class="peer" />
                    <div class="complete-task-value-area collapse-title bg-slate-400	 text-black	 peer-checked:bg-slate-200 	 peer-checked:text-black	">
                        {role === 'completed' && <button >Complete Task: {taskValue}</button>}
                        <div className='view-details-icon'>View Details<BiDownArrowAlt /></div>
                    </div>
                    <div class="collapse-content bg-slate-400	 text-black	 peer-checked:bg-slate-100 peer-checked:text-black	">
                        <p>{role === 'completed' && <button >Assign Date: {date}</button>}</p>
                        <p>{role === 'completed' && <button >Subject Topic: {title}</button>}</p>
                        <p>{role === 'completed' && <button >Details: {details}</button>}</p>
                        <div className="uncomplete-trash mt-4">
                            <button onClick={() => GoBackTouch(_id)} className='not-complete'> <BsBoxArrowRight /> Mark Not Completed</button>
                            <button onClick={() => handleTaskDelete(_id)} className='trash'><CgTrash />Go to Trash</button>
                        </div>
                    </div>
                </div>
            </div>

}

                {/* {role === 'completed' && <button >{taskValue}</button>} */}
                
            
        </div>
    );
};

export default CompleteTask;