import React, { Component } from "react";
import {Link} from "react-router-dom";

class Initial extends Component{
  render(){
    return(
      <div>
        <div><Link to='/customer'>customer</Link></div>
        <div><Link to='/admin'>admin</Link></div>
      </div>
    );
  }
}

export default Initial;