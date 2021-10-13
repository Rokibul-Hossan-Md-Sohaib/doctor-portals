import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";




const customStyles = {
    
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
const AppointmentForm = ({modalIsOpen, closeModal,appointmentOn,date}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const [modalIsOpen, setIsOpen] = useState(false)

    // function openModal() {
    //     setIsOpen(true);
    // }
    // function closeModal() {
    //     setIsOpen(false);
    // }
    
    
    const onSubmit = data => {
      data.service =appointmentOn;
      data.date =date
        data.created =new Date()

        fetch('http://localhost:5000/addAppointment' ,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then (res => res.json())
        .then(success => {
            if(success){
                closeModal()
                
                alert("Thanks For The Appointment")
            }
        })
      
    
       
    }
    return (

        <div>
            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
              {/* <h2>hello</h2>
              <button onClick={closeModal}>Close</button>
              <div> I am a modal</div>
              <form >
                  <input/>
                  <button>tab navigation</button>
                  <button>tab navigation</button>
                  <button>tab navigation</button>
                  <button>tab navigation</button>
              </form> */}

                <h2 className="text-brand text-center">{appointmentOn}</h2>
                <p className="text-secondry text-center">On {date.toDateString()}<small></small></p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" {...register("email", { required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" {...register("gender", { required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input {...register("age", { required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input {...register("weight", { required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button   type="submit" className="btn btn-brand">Send</button>
                    </div>
                </form>
            </Modal>
           
        </div>
    );
};

export default AppointmentForm;