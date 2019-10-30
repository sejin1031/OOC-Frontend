import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./MenuContainer.scss";


class MenuContainer extends Component {
  render() {
    return (
      <div className="menu">
        <Link to='/'><img src={require("./img/ooc.png")} alt="logo"/></Link>
        <Link className="link"><div className="menu_item">영화</div></Link>
        <Link to='/book' className="link"><div className="menu_item">예매</div></Link>
        
      </div>
    );
  }
}

export default MenuContainer;