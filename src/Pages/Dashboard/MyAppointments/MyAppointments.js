import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../SharedPages/Loading/Loading';

const MyAppointments = () => {
    const { user, logOut } = useContext(AuthContext);

    const url = `https://doctors-portal-server-zeta-ten.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-8 mx-8'>
            <h3 className="text-xl font-bold">My Appointments</h3>
            <div className="overflow-x-auto my-8">
                <table className="table w-11/12">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.patientName}</td>
                                    <td>{booking.treatmentName}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button className='btn btn-primary btn-sm'>Pay</button>
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid &&
                                            <span className='text-secondary'>Paid</span>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;

