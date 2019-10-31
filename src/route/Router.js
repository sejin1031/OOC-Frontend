import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Initial from 'container/Initial';
import MenuContainer from "container/customer/menu/MenuContainer";
import MainContainer from "container/customer/main/MainContainer";
import BookContainer from "container/customer/book/BookContainer";
import Home from "container/customer/Home";

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <Switch>
            <Route exact path="/" component={() => ( <Initial/> )}/>
            <Route exact path="/admin" component={() => ( <Initial/> )}/>
            <Route exact path="/customer" component={() => ( <MainContainer/> )}/>
            <Route exact path="/customer/home" component={() => ( <Home/>)}/>
            <Route exact path="/customer/book" component={() => ( <BookContainer/>)}/>

            
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;