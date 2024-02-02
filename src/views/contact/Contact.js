import React from "react";
import ContentFirst from "../content-first/Content-first";
import address from "../../assets/img/address.png"
import clock from "../../assets/img/clock.png"
import contact from "../../assets/img/contact.png"
import './contact.scss'
import { toast } from "react-toastify";
class Contact extends React.Component{
    handleSubmit = ()=>{
        toast.success("Question submitted successfully!!")
    }
    render(){
        
        return(
            <>
            <ContentFirst
            p="GET 24/7 SUPPORT"
            h1="Contact us"
            />

            <div className="contact">
                <div className="text">
                    <h2>Have you any question?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
                    <div className="form">
                        <input placeholder="Name" className="name"/>
                        <input placeholder="Email" className="name"/>
                        <input placeholder="Phone" className="name"/>
                        <input placeholder="Subject" className="name"/>
                        <input placeholder="Message" className="message"/>
                    </div>
                    <button onClick={()=>this.handleSubmit()}>Submit</button>
                </div>
                <div className="address">
                    <div className="content">
                        <h3><span><img src={address}/></span>Shop Address</h3>
                        <p>34/8, East Hukupara </p>
                        <p>Gifirtok, Sadan.</p>
                        <p>Country Name</p>
                    </div>
                    <div className="content">
                        <h3><span><img src={clock}/></span>Shop Hours</h3>
                        <p>MON - FRIDAY: 8 to 9 PM</p>
                        <p>SAT - SUN: 10 to 8 PM</p>
                    </div>
                    <div className="content">
                        <h3><span><img src={contact}/></span>Contact</h3>
                        <p>Phone: +00 111 222 3333</p>
                        <p>Email: support@domain.com</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Contact