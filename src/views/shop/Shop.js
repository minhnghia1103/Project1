import React from "react";
import ContentFirst from "../content-first/Content-first";
import './shop.scss';

import Product_fruits from "./Product_fruits";
import { connect } from "react-redux";
import {toast} from 'react-toastify';

class Shop extends React.Component{
    state = {
        filter:'All',
        all :true,
        straw:false,
        grape:false,
        lemon:false
    }
    handleOnclickAll = ()=>{
        this.setState({
            filter:'All',
            all :true,
            straw:false,
            grape:false,
            lemon:false
        })
    }
    handleOnclickStrawberry = ()=>{
        this.setState({
            filter:'Strawberry',
            all :false,
            straw:true,
            grape:false,
            lemon:false
        })
    }
    handleOnclickBerry = ()=>{
        this.setState({
            filter:'Grape',
            all :false,
            straw:false,
            grape:true,
            lemon:false
        })
    }
    handleOnclickLemon = ()=>{
        this.setState({
            filter:'Lemon',
            all :false,
            straw:false,
            grape:false,
            lemon:true
        })
    }
    
    handleAddToShop = (user)=>{
        this.props.addToShopRedux(user)
        toast.success("Add to card success!!")
    }

    
    render (){
        let {filter,all,straw,grape,lemon}=this.state
        let listFruits = Product_fruits.filter(todo => filter === 'All' || filter === todo.type)
        return(
            <>
                <ContentFirst
                p="FRESH AND ORGANIC"
                h1="Shop"
                />

                <div className="produce">
                    <div className="text-product">
                        <div className={all?"textcolor-c" : "textcolor"} onClick={()=>this.handleOnclickAll()}><p >All</p></div>
                        <div className={straw?"textcolor-c" : "textcolor"} onClick={()=>this.handleOnclickStrawberry()}><p  >Strawberry</p></div>
                        <div className={grape?"textcolor-c" : "textcolor"} onClick={()=>this.handleOnclickBerry()}><p >Berry</p></div>
                        <div className={lemon?"textcolor-c" : "textcolor"} onClick={()=>this.handleOnclickLemon()}><p >Lemon</p></div>
                    </div>
                    <div className="fruits-produce">
                        {listFruits.map((item,index)=>{
                            return(
                                <div className="img">
                                <img src={item.img}/>
                                <h2>{item.type}</h2>
                                <p>{item.amount}</p>
                                <h1>{item.money} $</h1>
                                <button onClick={()=>this.handleAddToShop(item)}>Add to Cart</button>
                        </div>
                            )
                        })}
                        
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {dataRedux: state.users}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addToShopRedux : (userAdd)=> dispatch({type: 'ADD_TO_SHOP',payload:userAdd})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Shop)