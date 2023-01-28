import React from 'react';
import bg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h3 className="mt-5 text-xl text-secondary font-bold">Contact Us</h3>
                    <h1 className="mb-5 text-3xl text-white">Stay Connected With Us</h1>
                    <form>
                        <input type="text" placeholder="Email" className="input w-full max-w-xs my-4" />
                        <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
                        <textarea className="textarea w-full max-w-xs my-4" placeholder="Your Message"></textarea>
                        <div>
                            <PrimaryButton>Submit</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;