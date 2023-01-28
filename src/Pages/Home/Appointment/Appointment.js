import React from 'react';
import bg from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor-small.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Appointment = () => {
    return (
        <div className="hero mt-32" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row max-w-5xl mx-auto py-0">
                <img src={doctor} className="w-1/2 -mt-20 hidden lg:block" alt='' style={{ height: "524px" }} />
                <div className='lg:ml-12 py-16'>
                    <h3 className='text-secondary font-bold mb-4'>Appointment</h3>
                    <h1 className="text-3xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Appointment;