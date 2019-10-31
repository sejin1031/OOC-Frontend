import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import MenuContainer from 'container/customer/menu/MenuContainer';
import Home from 'container/customer/Home';
import BookContainer from 'container/customer/book/BookContainer';

import "./MainContainer.scss";

class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <MenuContainer/>
      </div>
    );
  }
}

export default MainContainer;