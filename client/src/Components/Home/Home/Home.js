import React from 'react';
import Footer from '../../Sheared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contract/Contact';
import Doctors from '../Doctors/Doctors';
import FeatureServices from '../FeatureServices/FeatureServices';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <FeatureServices />
      <MakeAppointment />
      <Testimonials />
      <Blogs />
      <Doctors/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;