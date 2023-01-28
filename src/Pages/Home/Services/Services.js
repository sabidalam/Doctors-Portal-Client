import React from 'react';
import image1 from '../../../assets/images/fluoride.png';
import image2 from '../../../assets/images/cavity.png';
import image3 from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        {
            id: 1,
            name: "Fluoride Treatment",
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            image: image1,
        },
        {
            id: 2,
            name: "Cavity Filling",
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            image: image2,
        },
        {
            id: 3,
            name: "Teeth Whitening",
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            image: image3,
        },
    ]
    return (
        <div className='my-20'>
            <h3 className='text-secondary text-center font-bold'>OUR SERVICES</h3>
            <h1 className='text-center text-2xl'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-5/6 mx-auto'>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}>
                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;