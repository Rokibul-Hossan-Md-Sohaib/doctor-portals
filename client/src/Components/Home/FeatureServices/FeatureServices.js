import React from 'react';
import feature from '../../../images/feature.png'

const FeatureServices = () => {
    return (
       <section className="features-service pb-0  my-5 mb-5">
                 <div className="container mb-5">
           <div className="row mb-5">
               <div className="col-md-5 mr-5 mb-5 m-md-0">
                    <img className="img-fluid" src={feature} alt="" />
               </div>
               <div className="col-md-7 align-self-center" >
                    <h1 className="font-weight-bold">Exceptional Dental Care <br /> On Your Time</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusantium consequatur vitae ipsa a officia tempora est facere deleniti.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusantium consequatur vitae ipsa a officia tempora est facere deleniti
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusantium consequatur vitae ipsa a officia tempora est facere deleniti</p>

                        <button className="btn btn-primary pb-3 pt-3 mt-4">Learn More</button>
               </div>
             
           </div>
           </div>
       </section>
    );
};

export default FeatureServices;