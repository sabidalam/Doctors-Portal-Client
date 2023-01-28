import React from 'react';
import image from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className="hero my-8 py-14" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content max-w-6xl flex-col lg:flex-row-reverse">
                <img src={image} className="rounded-lg shadow-2xl lg:w-5/12" alt='' />
                <div className='lg:mr-12'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;