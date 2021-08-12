import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row ">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 text-white py-5" >
                        <h5 style={{color:"#12D0D9"}} className="text-uppercase ">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br /> Today</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusantium consequatur vitae ipsa a officia tempora est facere deleniti.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                        <button style={{color:"#12D0D9", backgroundColor:"12D0D9"}}  className="btn  pb-3 pt-3 mt-4">Learn More</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;