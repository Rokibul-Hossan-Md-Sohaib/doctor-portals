import React from 'react';
import fluoride from '../../../images/Fluoride.png'
import cavity from '../../../images/cavity.png'
import teeth from '../../../images/teeth.png'
import ServicesDetail from '../ServicesDetails/ServicesDetail';

const serviceData =[
    {
    name: 'Fluoride Treatment',
    img: fluoride
},
{
    name: 'Cavity Filling',
    img: cavity
},
{
    name: 'Teeth Whitening',
    img: teeth
}
]
const Services = () => {
    return (
        <section className="service-container mt-5">
            <div className="text-center">
                <h5 style={{color:"#1CC7C1"}}>Our Services</h5>
                <h1 className="font-weight-bold">Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
          <div className="w-75 row mt-5 pt-5">
          {
                serviceData.map(serve => <ServicesDetail service={serve} />)
            }
          </div>
        </div>
        </section>
    );
};

export default Services;