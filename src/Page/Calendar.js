import React from 'react';
import { DayPicker, useInput } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import useTask from '../hook/useTask';
import TodoEditModal from './TodoEditModal';



const Calendar = () => {
    const [task] = useTask()
    console.log(task);
    const { inputProps, dayPickerProps } = useInput({
        defaultSelected: new Date(),
        fromYear: 2020,
        toYear: 2022,
        format: 'PP',
        required: true
    });


    return (
        <div className='flex justify-around mt-12'>
            <div>
                <DayPicker {...dayPickerProps} footer={Calendar} />;
            </div>
            <div>

            <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Task</th>
                <th>Date</th>
                <th>Title</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {
                task.map(task => <tr>
                  <td>{task.task}</td>
                  <td>{task.date}</td>
                  <td>{task.title}</td>
                  <td>{task.details}</td>
                </tr>)
              }

            </tbody>
          </table>
        </div>


                {/* {
                    task.map(task => <TodoEditModal
                        task={task}
                    ></TodoEditModal>)
                } */}
            </div>
        </div>
    );
};

export default Calendar;