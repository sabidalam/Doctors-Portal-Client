import React from 'react';
import image from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero my-8 py-14" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content max-w-6xl flex-col lg:flex-row-reverse">
                <img src={image} className="rounded-lg shadow-2xl lg:w-5/12" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;