import React, { Component } from "react";

import ChartData from "container/main/chart/Chartdata";
import "./MainContainer.scss";

class MainContainer extends Component {
  render() {
    return (
      <div className="main">
        <ChartData/>
      </div>
    );
  }
}

export default MainContainer;