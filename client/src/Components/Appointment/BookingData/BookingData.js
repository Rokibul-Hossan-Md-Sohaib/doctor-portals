import React, { useState } from 'react';
import AppointmentForm from '../ApoointmentForm/AppointmentForm';

const BookingData = ({bookingData, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal=()=> setIsOpen(true);
    const closeModal=()=> setIsOpen(false);
    return (
        <div className="col-md-4 mb-5">
            <div class="card p-3" >
                <div class="card-body text-center">
                    <h5 class="card-title text-brand">{bookingData.subject}</h5>
                    <h6 class="card-text">{bookingData.visitingHour}</h6>
                    <p>{bookingData.totalSpace} Space Available</p>
                    <button onClick={openModal} className="btn btn-primary text-Uppercase">Book Appointment</button>
                    <AppointmentForm date={date} modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={bookingData.subject}/>
                </div>
            </div>

        </div>
    );
};

export default BookingData;