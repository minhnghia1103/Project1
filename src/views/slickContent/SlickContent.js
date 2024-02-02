import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from '../../assets/img/avatar1.png'
import avatar2 from '../../assets/img/avatar2.png'
import avatar3 from '../../assets/img/avatar3.png'
import quote from '../../assets/img/quote.png'
import './slickContent.scss'
class SlickContent extends React.Component{
    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
          };
        return(
            <Slider {...settings}>
                <div className="slick-c">
                    <img className="main-c" src={avatar1}/>
                    <h3>Saira Hakin 
                        <span>Local shop owner</span>
                    </h3>
                    <p>" Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "</p>
                    <img className="phu" src={quote}/>
                </div>
                <div className="slick-c">
                    <img className="main-c" src={avatar2}/>
                    <h3>Daviv Niph 
                        <span>Local shop owner</span>
                    </h3>
                    <p>" Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "</p>
                    <img className="phu" src={quote}/>
                </div>
                <div className="slick-c">
                    <img className="main-c" src={avatar3}/>
                    <h3>Jacob Sikim
                        <span>Local shop owner</span>
                    </h3>
                    <p>" Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae vitae dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium "</p>
                    <img className="phu" src={quote}/>
                </div>
            </Slider>
        )
    }
}

export default SlickContent