import React from "react";
import { Badge } from "rsuite";
import { FaShoppingCart } from "react-icons/fa";
import "./logoShopCard.scss";
import { connect } from "react-redux";
import "rsuite/dist/rsuite.min.css";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

class LogoCard extends React.Component {
  render() {
    let tingCard = this.props.dataRedux;
    return (
      <>
        <div className="logoCard">
          <NavLink to="/getPay" activeClassName="active">
            {tingCard.length > 0 ? (
              <Badge content={tingCard.length} style={{ color: "orange" }}>
                <FaShoppingCart />
              </Badge>
            ) : (
              <div>
                <FaShoppingCart />
              </div>
            )}
          </NavLink>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
export default connect(mapStateToProps)(LogoCard);
