import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./MenuContainer.scss";


class MenuContainer extends Component {
  render() {
    return (
      <div className="menu">
        <Link to='/customer/home'><img src={require("./img/ooc.png")} alt="logo"/></Link>
        <Link to='/customer/book' className="link"><div className="menu_item">예매</div></Link>
        
      </div>
    );
  }
}

export default MenuContainer;