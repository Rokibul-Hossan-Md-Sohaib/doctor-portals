import React from 'react';
import FeatureServices from '../FeatureServices/FeatureServices';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
          <Header/>
          <Services/>
          <FeatureServices/>
        </div>
    );
};

export default Home;