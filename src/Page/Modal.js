import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Modal.css";


function Modal({ setOpenModal }) {
    const [taskDetails, setTaskDetails] = useState([])
    const handelAddTask = event => {
        event.preventDefault()
        const task = event.target.task.value
       

        const taskDetails = { task}
        setTaskDetails(taskDetails)



        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskDetails)
        })
            .then(res => res.json())
            .then(() => {
                toast('Task Added');
                event.target.reset()
                window.location.reload();
            })
    }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Close
          </button>
        </div>
        <div className="title">
          <h1>Add a task</h1>
        </div>
        <form onSubmit={handelAddTask} className="modal-form">
          <input type="text" name="task" placeholder="New Task" required/> 
          <input className="modal-submit-btn" type="submit" value="Save" />
        </form>
        
      </div>
      <ToastContainer />
    </div>
  );
}

export default Modal;