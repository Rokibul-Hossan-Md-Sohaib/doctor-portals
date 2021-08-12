import React from 'react';
import './InfoCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 text-white">
            <div className={`d-flex info-container justify-content-center cor-${info.background}`}>
                <div className="mr-3" >
                    <FontAwesomeIcon className="info-icon " icon={info.icon} />
                </div>
                <div className="description"> 
                    <h6>{info.title}</h6>
                    <small className="small">{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;