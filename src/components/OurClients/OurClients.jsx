import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const OurClients = () => {

    const slider = React.useRef(null);

    const style = {
        btn:{
            margin:"0px 15px",
            border:"none",
            width:"48px",
            height:"48px",
            borderRadius:"5px",
            backgroundColor:"#85bc4d",
            color:"white",
            fontSize:"30px"
        }
    }

    const slideItems = [
        "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
        "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg"
    ]
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      const renderArrows = () => {
        return (
        <div className='col-12 text-center'>
          <div className="slider-arrow">
            <button style={style.btn}
              className="arrow-btn prev"
              onClick={() => slider?.current?.slickNext()}
            >
              {"<"}
            </button>
            <button style={style.btn}
              className="arrow-btn next"
              onClick={() => slider?.current?.slickPrev()}
            >
              {">"}
            </button>
          </div>
          </div>
        );
      };
  return (
    <>
        
        <div>
        
        <Slider {...settings} ref={slider}>
          {slideItems.map(item =>(<div className='px-2'>
            <img src={item} style={{width:"100%",display:"block",height:"300px"}}/>
          </div>))}
         
        </Slider>
        <div style={{padding:"100px 0px"}}>
        {renderArrows()}
        </div>
      </div>
      
    </>
  )
}

export default OurClients