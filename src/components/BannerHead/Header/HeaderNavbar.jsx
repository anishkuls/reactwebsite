import React from 'react'
import Button from '../../UI/Button'
import "./headerNavbar.scss";

const HeaderNavbar = () => {
    const logoStyle = {
        main:{
            
                fontFamily: "Poppins-Black",
                fontSize: "34px"
        
        }
    }
  return (
    <>
        
        <header>
            <div class="col-md-11 col-12 mx-auto">
            <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" style={logoStyle.main}>LOGO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse main-nav" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about-us">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#our-partners">Our Partners</a>
            </li>
            <li class="nav-item">
                <Button text="Contact Us" href="#contact-us"/>
            </li>
            
            
          </ul>
          
        </div>
      </div>
    </nav>
            </div>
        </header>
        
    </>
  )
}

export default HeaderNavbar