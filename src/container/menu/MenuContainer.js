import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./MenuContainer.scss";


class MenuContainer extends Component {
  render() {
    return (
      <div className="menu">
        <Link to='/book'><div>Book</div></Link>
        <Link className="menu_item">CHART</Link>
      </div>
    );
  }
}

export default MenuContainer;