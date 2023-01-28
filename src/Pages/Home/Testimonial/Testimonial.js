import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import img1 from '../../../assets/images/people1.png';
import img2 from '../../../assets/images/people2.png';
import img3 from '../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            image: img1,
            location: 'California',
            message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content'
        },
        {
            _id: 1,
            name: 'Winson Herry',
            image: img2,
            location: 'California',
            message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content'
        },
        {
            _id: 1,
            name: 'Winson Herry',
            image: img3,
            location: 'California',
            message: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content'
        },
    ]
    return (
        <section className='my-16 max-w-6xl mx-auto'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className="text-secondary text-xl font-bold">Testimonial</h3>
                    <h1 className="text-3xl">What Our Patients Says</h1>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <TestimonialCard
                        key={review._id}
                        review={review}>
                    </TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;