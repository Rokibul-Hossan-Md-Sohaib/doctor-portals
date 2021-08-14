import React from 'react';
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const AppointmentHeader = ({ heandelDateChange }) => {


    return (
        <div style={{ height: "600px" }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: "#3A4256" }}>Apoointment </h1>
                <Calendar
                    onChange={heandelDateChange}
                    value={new Date()}
                />
            </div>

            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </div>
    );
};

export default AppointmentHeader;