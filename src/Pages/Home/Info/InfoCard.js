import React from 'react';

const InfoCard = ({ card }) => {
    const { name, icon, description, bgClass } = card;
    return (
        <div className={`card text-white px-8 py-6 md:card-side shadow-xl ${bgClass}`}>
            <figure><img src={icon} alt="" /></figure>
            <div className="card-body mt-2">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;