import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    const info = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open from 9.00am to 5.00pm',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'location here to there',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: 'Contact us  from 10am to 4pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-5/6 mx-auto my-20'>
            {
                info.map(card => <InfoCard
                    key={card.id}
                    card={card}>
                </InfoCard>)
            }
        </div>
    );
};

export default Info;