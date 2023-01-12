import React from 'react'
import bannerImage1 from "../../images/banner.png"
import Button from '../UI/Button'
import bannerImage2 from "./../../images/banner2.png"
import "./banner.scss"
import HeaderNavbar from './Header/HeaderNavbar'



const Banner = () => {
    const navStyle = {
        main:{
            position:"absolute",
            top:0,
            zIndex:"999"
        }
    }
  return (
 
    <>
        <div class=".container-fluid head-banner" style={{width:"100%"}}>
            

            <div className="banner">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={bannerImage1} class="d-block w-100" width="100%" alt="..." />
      <div class="carousel-caption d-flex justify-content-center align-items-center">
        <div>
        <h1>business template design</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
        <Button text="View More"/>            
        </div>
      </div>  
    </div>
    <div class="carousel-item">
      <img src={bannerImage2} class="d-block w-100" width="100%"alt="..." />
      <div class="carousel-caption d-flex justify-content-center align-items-center">
        <div>
        <h1>business template design</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                <Button text="View More"/>
        </div>
      </div> 
    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

            </div>
            <div className="full-header"> 
            <HeaderNavbar />
            </div>
        </div>
    </>
  )
}

export default Banner