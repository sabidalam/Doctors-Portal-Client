import React from 'react';
import Info from './Info/Info';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import About from './About/About';
import Appointment from './Appointment/Appointment';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <About></About>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;