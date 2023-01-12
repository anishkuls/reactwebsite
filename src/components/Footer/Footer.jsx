import React from 'react';
import "./footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spacer from '../UI/Spacer';

const Footer = () => {
    const style = {
        iconColor:{
            color:"#85bc4d",
            fontSize:"24px",
            
        }

    }
  return (
    <>
    <div className="container-fluid footer">
        <Spacer />
        <div className="col-10 col-sm-10 col-md-9 col-lg-8 mx-auto">
            <div className="row">
                <div className='col-md-3 logo-icon col-12 logo-icons'>
                    <div className='logo'>
                        LOGO
                    </div>
                    <div className='footer-icons'>
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" style={style.iconColor} />
                        <FontAwesomeIcon icon="fa-brands fa-instagram" style={style.iconColor}/>
                        <FontAwesomeIcon icon="fa-brands fa-twitter" style={style.iconColor}/>
                    </div>
                </div>
                <div className='col-md-9 col-12 all-list'>
                    <div className="row">
                        <div className='col-md-5 col-lg-6 col-7 pt-4 pt-md-0'>
                            <ul className='contact-list'>
                                <li><a><FontAwesomeIcon icon="fa-solid fa-phone" style={{marginRight:"2px"}}/> (615) 257-1491</a></li>
                                <li><a><FontAwesomeIcon icon="fa-regular fa-envelope" style={{marginRight:"2px"}}/> TEA Building 801 2nd Ave. N. 3rd Floor Nashville, TN 37201</a></li>
                                <li><a><FontAwesomeIcon icon="fa-solid fa-location-dot" style={{marginRight:"2px"}}/> info@xyz.com</a></li>
                            </ul>
                        </div>
                        <div className='col-md-4 col-lg-3 col-12 pt-4 pt-md-0'>
                            <ul className="ms-3 ms-md-0">
                                <li><a href="#">Home</a></li>  
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Gallery</a></li>
                            </ul>
                        </div>
                        <div className='col-md-3 col-12 pt-4 pt-md-0'>
                            <ul className="ms-3 ms-md-0">
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Sitemap</a></li>
                             </ul>
                        </div>                        
                    </div>
                </div>
            </div> 
        </div>
        <Spacer />
    </div>
    <div className="container-fluid bottom-footer">
        <div className='row row-1 text-center'>
             <div className='col py-3'>
             Copyright © 2022. All Rights Reserved.
             </div>
        </div>
    </div>
    </>
  )
}

export default Footer