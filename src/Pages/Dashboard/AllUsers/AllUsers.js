import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-zeta-ten.vercel.app/users')
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`https://doctors-portal-server-zeta-ten.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful');
                    refetch();
                }
            })

    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this user?');
        if (proceed) {
            fetch(`https://doctors-portal-server-zeta-ten.vercel.app/users/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully');
                        refetch();
                    }
                })
        }


    }

    return (
        <div className='my-8 mx-8'>
            <h3 className="text-xl font-bold mb-6">All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user?.role !== 'admin' &&
                                        <button onClick={() => handleMakeAdmin(user?._id)} className='btn btn-sm btn-secondary'>Make Admin</button>
                                    }
                                </td>
                                <td><button onClick={() => handleDelete(user._id)} className='btn btn-sm btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;