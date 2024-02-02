import React from "react";
import Countdown from 'react-countdown';
import sale from '../../assets/img/sale.jpg'
import './countdown.scss'
class Coundown extends React.Component{
        time = (day,hour,minute,second)=>{
            return day*24*60*60 + hour*60*60 + minute*60 +second;
        }
            
        renderer = ({ days,hours, minutes, seconds }) => {
        
        
          // Render a countdown
          return <>
                    <div className="countdown">
                        <div className="time">{days>10 ? days : "0"+days} <span>days</span></div>
                        <div className="time">{hours>10 ? hours : "0"+hours} <span>hours</span></div>
                        <div className="time">{minutes>10 ? minutes : "0"+minutes} <span>minutes</span></div>
                        <div className="time">{seconds>10 ? seconds : "0"+seconds} <span>seconds</span></div>
                    </div>
                </>
        
      };
        render(){return(
            <div className="saleoff">
                <div className="sale">
                    <img src={sale}/>
                    <div className="radius">
                        <h1>30%</h1>
                        <p>off per kg</p>
                    </div>
                </div>

                <div className="saletext">
                    <h1><span>Deal</span> of the month</h1>
                    <h2>HIKAN STRWABERRY</h2>
                    <p>Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant</p>
                    <Countdown
                        date={Date.now() + this.time(1,5,56,50)*1000}
                        renderer={this.renderer}
                    />,
                </div>
            </div>
        )
        }
}

export default Coundown