import React from 'react';
import useTask from '../hook/useTask';
import CompleteTask from './CompleteTask';
import './CompleteTask.css'

const CompletedTasks = () => {
    const [task] = useTask()
    const {role} = task
    console.log(task);
    return (
        <div className='complete-container-area pt-12 pb-14'>
            {
                task.map(task=> <CompleteTask
                    task={task}
                ></CompleteTask>)
            }
        </div>
    );
};

export default CompletedTasks;