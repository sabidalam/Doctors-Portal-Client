import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import Header from '../Pages/SharedPages/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="doctors-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="doctors-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard' className='btn btn-secondary mb-2'>My Appointment</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allUsers' className='btn btn-secondary mb-2'>All Users</Link></li>
                                <li><Link to='/dashboard/addDoctor' className='btn btn-secondary mb-2'>Add Doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctors' className='btn btn-secondary'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;