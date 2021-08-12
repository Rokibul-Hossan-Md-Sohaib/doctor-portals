import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light  ">
        <div class="container-fluid">          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link mr-5 " aria-current="page" href="#">Home</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link mr-5 mr-5" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mr-5" href="#">Dental Services</a>
              </li> */}
               <li class="nav-item ">
                <a class="nav-link mr-5" href="/appointment">Appointment</a>
              </li>
              <li class="nav-item" >
                <a class="nav-link mr-5" href="/login">Login</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link mr-5 text-white" href="#">Reviews</a>
              </li>
              <li class="nav-item" >
                <a class="nav-link mr-5 text-white" href="#">Blogs</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link mr-5 text-white" href="#">Contact Us</a>
              </li>
            </ul> 
          </div>
        </div>
      </nav>
    );
};

export default Navbar;