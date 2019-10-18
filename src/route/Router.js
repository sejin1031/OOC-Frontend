import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import MainContainer from "container/main/MainContainer";

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <>
          <Link to="/">
            <div className="top">
              <div className="title">OOC-Frontend skeleton</div>
            </div>
          </Link>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <MainContainer/>
              )}
            />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Router;