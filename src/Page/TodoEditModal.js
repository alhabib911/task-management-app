import React from 'react';

const TodoEditModal = (props) => {
    const {_id, title, details, task, date} = props.task
    console.log(props.task);
    return (
        <div>
            {task}
            {title}
            {date}
            {details}
        </div>
    );
};

export default TodoEditModal;