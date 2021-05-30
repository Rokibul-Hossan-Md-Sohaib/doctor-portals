import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faPhone,faMapMarker,faClock } from '@fortawesome/free-solid-svg-icons'

const infoData =[
    {
          title: "Opening Hours",
          description:"We are Open for & days",
          icon: faClock,
          background: "primary"
},
{
    title: "Visit Our Location",
    description:"Brooklyn NY 10035 United States ",
    icon: faMapMarker,
    background: "dark"
},
{
    title: "Contact Us Now",
    description:"+99078243",
    icon: faPhone,
    background: "primary"
}
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
          <div className="w-75 row">
          {
                infoData.map(inform =>  <InfoCard info={inform} />)
            }
          </div>
        </section>
    );
};

export default BusinessInfo;