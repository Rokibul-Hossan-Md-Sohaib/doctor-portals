import React from 'react';

const BookingData = ({bookingData}) => {
    return (
        <div className="col-md-4 mb-5">
            <div class="card p-3" >
                <div class="card-body text-center">
                    <h5 class="card-title text-brand">{bookingData.subject}</h5>
                    <h6 class="card-text">{bookingData.visitingHour}</h6>
                    <p>{bookingData.totalSpace} Space Available</p>
                    <button className="btn btn-primary text-Uppercase">Book Appointment</button>
                </div>
            </div>

        </div>
    );
};

export default BookingData;