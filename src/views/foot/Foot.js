import React from "react";
import './Foot.scss'
import SlickLogo from "../slicklogo/SlickLogo";
class Foot extends React.Component{
    render(){
        return (
        <>
        <SlickLogo/>
        <div className="foot">
            <div className="foot-about">
                <h1>About us</h1>
                <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
            </div>
            <div className="foot-touch">
                <h1>Get in Touch</h1>
                <p>34/8, East Hukupara, Gifirtok, Sadan.</p>
                <p>support@domain.com</p>
                <p>+00 111 222 3333</p>
            </div>
            <div className="foot-page">
                <h1>Pages</h1>
                <p><span>&gt;</span>Home</p>
                <p><span>&gt;</span>About</p>
                <p><span>&gt;</span>Shop</p>
                <p><span>&gt;</span>Contact</p>
            </div>
            <div className="foot-sub">
                <h1>Subscribe</h1>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <input placeholder="Email"/>
            </div>
            
        </div>
        </>
        )
    }
}
export default Foot