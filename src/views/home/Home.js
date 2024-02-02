import React from "react";
import "./home.scss"
import background from "../../assets/img/background.png"
import support from "../../assets/img/support.png"
import shipping from "../../assets/img/shipping.png"
import refund from "../../assets/img/refund.png"
import strawberry from "../../assets/img/strawberry.jpg"
import lemon from "../../assets/img/lemon.jpg"
import grape from "../../assets/img/grape.jpg"
import Coundown from "../coundown/Coundown";
import SlickContent from "../slickContent/SlickContent";
import { NavLink } from "react-router-dom";
import Product_fruits from "../shop/Product_fruits.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Home extends React.Component{
    
    render(){
        var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
            <div className="homepage">
            <div className="home-easy">
                {/* <img src={background}/> */}
                <div className="content">
                    
                    <p>FRESH & ORGANIC</p>
                    <h1>Delicious Seasonal Fruits</h1>
                    <div className="btn">
                        <button className="conllection"><NavLink to="/shop">Fruit Collection</NavLink></button>
                        <button className="contact-easy"><NavLink to="/contact">Contact Us</NavLink></button>
                    </div>
                </div>
            </div>

            <div className="connect">
            <div className="shipping">
                <img src={shipping}/>
                <ul>
                    <li className="hard">Free Shipping</li>
                    <li className="easy">When order over $75</li>
                </ul>
            </div>
            <div className="shipping">
                <img src={support}/>
                <ul>
                    <li className="hard">24/7 Support</li>
                    <li className="easy">Get support all day</li>
                </ul>
            </div>
            <div className="shipping refund">
                <img src={refund}/>
                <ul>
                    <li className="hard">Free Shipping</li>
                    <li className="easy">When order over $75</li>
                </ul>
            </div>
            </div>

            <div className="produce">
                <div className="text">
                    <h1>Our <span>Products</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas </p>
                    <p>itaque eveniet beatae optio.</p>
                </div>
                <Slider {...settings} className="fruits">
                    {Product_fruits.map((item,index)=>{
                        return(
                            <div className="img">
                                <img src={item.img}/>
                                <h2>{item.type}</h2>
                                <p>Per {item.amount}</p>
                                <h1>{item.money} $</h1>
                            </div>
                        )
                    })}

                </Slider>
            </div>

            <Coundown/>
            <SlickContent/>
            
           
            </div>
            
        )
    }
}
export default Home