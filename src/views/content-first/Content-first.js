import React from "react";
class ContentFirst extends React.Component{
    render(){
        let {p,h1} = this.props
        return(
            <div className="home">
                {/* <img src={background}/> */}
                <div className="content">
                    
                    <p>{p}</p>
                    <h1>{h1}</h1>
                </div>
            </div>
        )
    }
}
export default ContentFirst