import React from 'react';
import BookingData from '../BookingData/BookingData';

const BookAppointment = ({time}) => {
    const bookData =[
        {
            id:1,
            subject:"Teeth Orthodintics",
            visitingHour:"8:00 AM -9:00AM",
            totlaSpace: "10"
        },
        {
            id:2,
            subject:"Teeth Orthodintics",
            visitingHour:"8:00 AM -9:00AM",
            totlaSpace: "10"
        },
        {
            id:3,
            subject:"Teeth Orthodintics",
            visitingHour:"8:00 AM -9:00AM",
            totlaSpace: "8"
        },
        {
            id:4,
            subject:"Teeth Orthodintics",
            visitingHour:"8:00 AM -9:00AM",
            totlaSpace: "12"
        },
        {
            id:5,
            subject:"Teeth Orthodintics",
            visitingHour:"8:00 AM -9:00AM",
            totlaSpace: "8"
        },
        {
            id:6,
            subject:"Teeth Orthodintics",
            visitingHour:"8:00 AM -9:00AM",
            totlaSpace: "5"
        },
    ]

    console.log(time)
    return (
        <div>
            <h1 className="text-center text-brand">Available Appointment is:{time.toDateString()}</h1>
            <div className="row">
                {
                    bookData.map(data => <BookingData key={bookData.id} bookingData={data} date={time}/>)
                }
            </div>
        </div>
    );
};

export default BookAppointment;