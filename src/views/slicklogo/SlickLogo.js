import React from "react";
import './slickLogo.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../../assets/img/logo1.png'
import logo2 from '../../assets/img/logo2.png'
import logo3 from '../../assets/img/logo3.png'
import logo4 from '../../assets/img/logo4.png'
import logo5 from '../../assets/img/logo5.png'

class SlickLogo extends React.Component{
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                  }
                },
                {
                    breakpoint: 770,
                    settings: {
                    slidesToShow: 2,
                    infinite: true,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                  }
                },
                {
                  breakpoint: 580,
                  settings: {
                  slidesToShow: 1,
                  infinite: true,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 2000,
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
          };
        return(
            <Slider {...settings} className="slicklogo">
                <div className="logoSlick">
                    <img src={logo1}/>
                </div>
                <div className="logoSlick">
                    <img src={logo2}/>
                </div>
                <div className="logoSlick">
                    <img src={logo3}/>
                </div>
                <div className="logoSlick">
                    <img src={logo4}/>
                </div>
                <div className="logoSlick">
                    <img src={logo5}/>
                </div>
                
            </Slider>
        )
    }
}

export default SlickLogo