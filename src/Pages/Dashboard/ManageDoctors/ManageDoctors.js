import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmationModal from '../../SharedPages/ConfirmationModal/ConfirmationModal';
import Loading from '../../SharedPages/Loading/Loading';

const ManageDoctors = () => {
    const { logOut } = useContext(AuthContext);
    const [deleteModal, setDeleteModal] = useState(null);

    const closeModal = () => {
        setDeleteModal(null);
    };

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server-zeta-ten.vercel.app/doctors', {
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
            catch (error) {

            }
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDelete = doctor => {
        console.log(doctor);
        fetch(`https://doctors-portal-server-zeta-ten.vercel.app/doctors/${doctor._id}`, {
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
    return (
        <div className='my-6 mx-8'>
            <h3 className='text-xl font-bold mb-6'>Manage Doctors: {doctors.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src={doctor.image} alt='' className='rounded-full' />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeleteModal(doctor)} htmlFor="confirmationModal"
                                        className='btn btn-sm btn-error'>Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteModal &&
                <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deleteModal.name}, it will be delete permanently`}
                    successButtonName={'Confirm'}
                    successAction={handleDelete}
                    modalData={deleteModal}
                    closeModal={closeModal}>
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;