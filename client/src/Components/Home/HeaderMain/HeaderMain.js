import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <div style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
               <h1 style={{color:"#3A4256"}}>Your New Smile <br /> Start Here</h1>
               <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                   Nemo numquam deserunt eaque minus optio atque eligendi modi temporibus deleniti debitis?</p>
           <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
          
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </div>
    );
};

export default HeaderMain;