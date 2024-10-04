// src/components/Card.js
import React from 'react';
import './Card.css';
import { Cardinfo } from '../../utils/constant/card';


const Card = (    ) => {
    const {name,profession,description,background,profileImage,profileLink} = Cardinfo;

    return (
        <div className="card" style={{ backgroundImage: `url(${background})` }}>
            <div className="card-content">
                <img src={profileImage} alt={name} className="profile-image" />
                <h2>{name}</h2>
                <h3>{profession}</h3>
                <p>{description}</p>
                <a href={profileLink} target="_blank" rel="noopener noreferrer" className="profile-link">View Profile</a>
            </div>
        </div>


    );
};

export default Card;
