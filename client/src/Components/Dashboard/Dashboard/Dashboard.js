import React, { useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
    const cotainerStyle={
        backgroundColor:"#F4FDFB",
        height:"100%",
    }
    const [selectDate , setSelectDate] =useState(new Date())
    const [appointments, setAppointments] = useState([])
    console.log(appointments)

    const heandelDateChange =(date)=>{
      setSelectDate(date);

      fetch('http://localhost:5000/appointmentByDate',{
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify({date})
      })
      .then(res => res.json())
      .then(data => setAppointments(data))
    }
    return (
        <div>
            <div style={cotainerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-5">
                <Calendar
                    onChange={heandelDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments}/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;