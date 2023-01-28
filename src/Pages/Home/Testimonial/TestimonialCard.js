import React from 'react';

const TestimonialCard = ({ review }) => {
    const { name, image, location, message } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-4">
            <div className="card-body">
                <p>{message}</p>
                <div className="flex items-center mt-4">
                    <div className="avatar mr-6">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='' />
                        </div>
                    </div>
                    <div>
                        <p>{name}</p>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;