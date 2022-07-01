import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Login from './Authentication/Login'
import Task from './Page/Task';
import Register from './Authentication/Register'
import CompletedTasks from './Page/CompletedTasks';
import ToDo from './Page/ToDo';
import Calendar from './Page/Calendar';
import RequereAuth from './Authentication/RequereAuth'
import MyProfile from './Page/MyProfile';
import ToDoEdit from './Page/ToDoEdit';
import MyProfileEdit from './Page/MyProfileEdit';


function App() {
  return (
    <div >
      <Routes>
        {/* <Route path='/task' element={<Task></Task>}></Route> */}
        {/* <Route path='completed-tasks' element={<CompletedTasks></CompletedTasks>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/Calendar' element={<Calendar></Calendar>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/' element={<RequereAuth>
          <Task></Task>
        </RequereAuth>}>
        <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='profile-edit' element={<MyProfileEdit></MyProfileEdit>}></Route>
          <Route path='completed-tasks' element={<CompletedTasks></CompletedTasks>}></Route>
          <Route path='todo' element={<ToDo></ToDo>}></Route>
          <Route path='todo/:id' element={<ToDoEdit></ToDoEdit>}></Route>
          <Route path='calendar' element={<Calendar></Calendar>}></Route>
    
        </Route>
      </Routes>
    </div>
  );
}

export default App;
