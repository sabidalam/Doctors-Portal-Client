import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'contain'
        }}>
            <footer className="footer p-10 text-accent max-w-6xl mx-auto">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <h1 className=''>New York - 101010 Hudson</h1>
                </div>
            </footer>
            <div className='text-center mb-4'>
                <p>Copyright © 2022 - All right reserved by Doctor Portal</p>
            </div>
        </div>
    );
};

export default Footer;