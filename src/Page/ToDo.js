import React from 'react';
import useTask from '../hook/useTask';
import NewTask from './NewTask';

const ToDo = () => {
    const [task] = useTask()
    console.log(task);
    return (
        <div>
            <div>
                
                {
                    task.map(task=> <NewTask
                        task={task}
                    ></NewTask>)
                }
            </div>
        </div>
    );
};

export default ToDo;