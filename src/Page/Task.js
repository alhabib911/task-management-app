import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import Navbar from '../Share/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Modal from './Modal'
import { AiFillPlusCircle } from 'react-icons/ai';
import './Task.css'
import Footer from '../Share/Footer'

const Task = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [user] = useAuthState(auth)
    return (
        <div>
            <Navbar></Navbar>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <label tabindex="0" for="my-drawer-2" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-56 bg-base-200 text-base-content">
                        {
                            user && <button
                                className="openModalBtn"
                                onClick={() => {
                                    setModalOpen(true);
                                }}
                            >
                                <div className='add-my-task-icon'>
                                    <div className='my-task-icon'>
                                        <AiFillPlusCircle />
                                    </div>
                                    <div>
                                        <li className='mt-10'> Add My Task</li>
                                    </div>
                                </div>
                            </button>

                        }
                        {
                            user && <li><Link to='/todo'>Todo</Link></li>
                        }
                        {
                            user && <li><Link to='/completed-tasks'>Completed Tasks</Link></li>
                        }
                        {
                            user && <li><Link to='/calendar'>Calender</Link></li>
                        }
                    </ul>

                </div>
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Task;