import React from 'react';

const TestimonialData = ({ data }) => {
    return (

        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{data.quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={data.img} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{data.name}</h6>
                    <p className="m-0">{data.from}</p>
                </div>
            </div>
        </div>

    );
};

export default TestimonialData;