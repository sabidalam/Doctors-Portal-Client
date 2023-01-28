import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => { });
    }
    return (
        <div>
            <p className='text-xl text-error'>Something went wrong</p>
            <p className='text-xl text-error'>{error.statusText || error.message}</p>
            <p>Please <Link to='/login'><button onClick={handleSignOut} className='btn btn-sm btn-primary'>SignOut</button></Link> and log back in</p>
        </div>
    );
};

export default DisplayError;