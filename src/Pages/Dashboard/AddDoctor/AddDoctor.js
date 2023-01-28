import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../SharedPages/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgKey;

    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-zeta-ten.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;

        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imageData.data.url
                    }
                    //save doctor info
                    fetch('https://doctors-portal-server-zeta-ten.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success('Added Successfully');
                            navigate('/dashboard/manageDoctors')
                        })

                }
            })

    }

    return (
        <div className='w-96 p-7 border-2 rounded-lg max-w-5xl mx-auto my-8'>
            <h3 className="text-xl font-bold text-center">Add a Doctor</h3>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Name</span></label>
                    <input type='text'
                        {...register("name")} className="input input-bordered mb-3" required />
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type='email'
                        {...register("email", { required: "Email Address is required" })}
                        className="input input-bordered mb-3" />
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full mb-3">
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <div className="form-control w-full">
                        <select className="select select-bordered" {...register("specialty")}>
                            {/* <option disabled selected>Pick one specialty</option> */}
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}>
                                    {specialty.name}
                                </option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type='file'
                        {...register("image")} className="input input-bordered mb-3 pt-2" required />
                </div>
                <input type="submit" value='Add Doctor' className="btn input-bordered w-full mb-5" />
            </form >

        </div>
    );
};

export default AddDoctor;