import React from "react";
import "./about.scss";
import homedeliver from '../../assets/img/home-deliver.png';
import quickrefund from '../../assets/img/quick-refund.png';
import bestprice from '../../assets/img/best-price.png';
import custombox from '../../assets/img/custom-box.png';
import buyfruits from '../../assets/img/buy-fruits.jpg';
import team1 from "../../assets/img/team-1.jpg"
import team2 from "../../assets/img/team-2.jpg"
import team3 from "../../assets/img/team-3.jpg"
import ContentFirst from "../content-first/Content-first";


class About extends React.Component{
    render(){
        return(
            <>
           
            <ContentFirst
            p="WE SALE FRESH FRUITS"
            h1="About Us"
            />
            <div className="fruitkha">
                
                    <div className="grid1"><h1>Why <span>Fruitkha</span></h1></div>
                    
                    <div className="imgicon grid2">
                        <img src={homedeliver}/>
                        <h3>Home Delivery</h3>
                        <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                    </div>
                    
                    <div className="imgicon grid3">
                        <img src={bestprice}/>
                        <h3>Best Price</h3>
                        <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                    </div>
                    
                    <div className="imgicon grid4">
                        <img src={custombox}/>
                        <h3>Custom Box</h3>
                        <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                    </div>
                    <div className="imgicon grid5">
                        <img src={quickrefund}/>
                        <h3>Quick Refund</h3>
                        <p>sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                    </div>
                
                <div className="grid6"><img src={buyfruits}/></div>
            </div>

            <div className="teamProduct">
                <div className="text">
                    <h1> <span>Our</span> Team</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas </p>
                    <p>itaque eveniet beatae optio.</p>
                </div>
                <div className="fruits">
                    <div className="img img1">
                        <img src={team1}/>
                        <h2>Jimmy Doe</h2>
                        <p>Farmer</p>
                    </div>
                    <div className="img img2">
                        <img src={team2}/>
                        <h2>Marry Doe</h2>
                        <p>Farmer</p>
                    </div>
                    <div className="img img3">
                        <img src={team3}/>
                        <h2>Simon Joe</h2>
                        <p>Famer</p>
                    </div>

                </div>
            </div>
            </>

            
        )
    }
}

export default About