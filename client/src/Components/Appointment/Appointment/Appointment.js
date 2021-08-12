import React, { useState } from 'react';
import Footer from '../../Sheared/Footer/Footer';
import Navbar from '../../Sheared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectDate , setSelectDate] =useState(new Date())

    const heandelDateChange =(date)=>{
      setSelectDate(date)
    }

    return (
        <div>
           <Navbar/>
           <AppointmentHeader heandelDateChange={heandelDateChange}/>
           <BookAppointment date={selectDate}/>
           <Footer/>
           
        </div>
    );
};

export default Appointment;