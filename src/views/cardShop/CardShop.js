import React from "react";
import { connect } from "react-redux";
import ContentFirst from "../content-first/Content-first";
import "./cardShop.scss";
import emtyCard from "../../assets/img/emtycard.png";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

class CardShop extends React.Component {
  handleDeleteCard = (user) => {
    this.props.deleteToShopRedux(user);
  };
  handleOnclickUpTo = (user) => {
    this.props.UpToQuantity(user);
  };
  handeOnClickDownTo = (user) => {
    this.props.DowToQuantity(user);
  };
  handleOnclickCheckout = () => {
    this.props.DeteleAll();
    toast.success("Successful purchase!!");
  };
  render() {
    let myCard = this.props.dataRedux;
    let subTotal = 0;
    for (let i = 0; i < myCard.length; i++) {
      subTotal = subTotal + myCard[i].money * (myCard[i].quantity ? myCard[i].quantity : 1);
    }

    return (
      <>
        <ContentFirst p="FRESH AND ORGANIC" h1="Cart" />
        {myCard.length !== 0 ? (
          <div>
            <div className="tableGetpay">
              <div className="information">
                <table>
                  <tr>
                    <th> </th>
                    <th>Product Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                  {myCard.map((item, index) => {
                    return (
                      <>
                        <tr>
                          <th>
                            <span className="delete" onClick={() => this.handleDeleteCard(item)}>
                              x
                            </span>
                          </th>
                          <th>
                            <img src={item.img} />
                          </th>
                          <th>{item.type}</th>
                          <th>
                            {item.money}
                            <span> $</span>
                          </th>
                          <th className="quantitySetUp">
                            <span onClick={() => this.handeOnClickDownTo(item)}>-</span>
                            <span>{item.quantity ? item.quantity : 1}</span>
                            <span onClick={() => this.handleOnclickUpTo(item)}>+</span>
                          </th>
                          <th>
                            {item.money * (item.quantity ? item.quantity : 1)}
                            <span> $</span>
                          </th>
                        </tr>
                      </>
                    );
                  })}
                </table>
              </div>
              <div className="getpay">
                <table>
                  <tr>
                    <th>Total</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <th>Subtotal:</th>
                    <th>
                      {subTotal}
                      <span> $</span>
                    </th>
                  </tr>
                  <tr>
                    <th>Shipping:</th>
                    <th>
                      45<span> $</span>
                    </th>
                  </tr>
                  <tr>
                    <th>Total:</th>
                    <th>
                      {subTotal + 45}
                      <span> $</span>
                    </th>
                  </tr>
                </table>
              </div>
              <button className="checkout" onClick={() => this.handleOnclickCheckout()}>
                Check Out{" "}
              </button>
              <span className="money">{subTotal + 45} $</span>
            </div>
          </div>
        ) : (
          <div className="emtyCard">
            <div className="imgemty">
              <img src={emtyCard} />
            </div>
            <div className="textemty">
              <p>Your shopping cart is empty</p>
            </div>
            <div>
              <button>
                <NavLink to="/shop">Go Shopping Now</NavLink>
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteToShopRedux: (userDelete) => dispatch({ type: "DELETE_TO_SHOP", payload: userDelete }),
    UpToQuantity: (upto) => dispatch({ type: "UP_TO", payload: upto }),
    DowToQuantity: (downto) => dispatch({ type: "DOWN_TO", payload: downto }),
    DeteleAll: (all) => dispatch({ type: "DELETE_ALL", payload: all }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CardShop);
