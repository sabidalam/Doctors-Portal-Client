import React from 'react';

const AppointOptionCard = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div>
            <div className="card shadow-xl w-80 mt-16">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <label
                            disabled={slots.length === 0}
                            htmlFor="booking-modal"
                            onClick={() => setTreatment(service)}
                            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white px-5">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointOptionCard;