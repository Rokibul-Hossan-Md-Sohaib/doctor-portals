import React from 'react';

const AppointmentByDate = ({appointments}) => {
  console.log(appointments)
    return (
        <div>
          <h1>  AppointmentByDate:{appointments.length}</h1>
          {
            appointments.map(app => <li key={app.id}>{app.name}</li>)
          }
        </div>
    );
};

export default AppointmentByDate;