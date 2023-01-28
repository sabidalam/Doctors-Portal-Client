import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => { });
    }
    const navbar = <>
        <Link to='/' className='btn btn-ghost'>Home</Link>
        <Link to='/' className='btn btn-ghost'>About</Link>
        <Link to='/appointment' className='btn btn-ghost'>Appointment</Link>
        {
            user?.uid &&
            <>
                <Link to='/dashboard' className='btn btn-ghost'>Dashboard</Link>
            </>
        }
        <Link to='/' className='btn btn-ghost'>Contact Us</Link>
    </>
    return (
        <div className="max-w-5xl mx-auto navbar bg-base-100 my-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <Link to='/' className="btn btn-primary bg-gradient-to-r from-secondary to-white normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <>
                            <Link to=''>
                                {
                                    user?.photoURL ?
                                        <img
                                            className='mr-3 rounded-full'
                                            src={user?.photoURL}
                                            style={{ height: '30px' }}
                                            alt=''>
                                        </img>
                                        :
                                        <FaUser className='mr-3'></FaUser>
                                }
                            </Link>
                            <button onClick={handleSignOut} className='btn btn-primary btn-sm'><Link to='/login'>SignOut</Link></button>
                        </>

                        :
                        <>
                            <Link to='/login' className='btn btn-ghost'>Login</Link>
                            <Link to='/signUp' className='btn btn-ghost'>SignUp</Link>
                        </>
                }
            </div>
            <label htmlFor="doctors-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Header;