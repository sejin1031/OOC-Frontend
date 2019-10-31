import React, { Component } from "react";
import CinemaSelect from 'container/customer/book/CinemaSelect';
import DateSelect from 'container/customer/book/DateSelect';
import MovieSelect from 'container/customer/book/MovieSelect';
import SeatSelect from 'container/customer/book/SeatSelect';

import "./BookContainer.scss";

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { step : 1,
      cienma :'',
      date : '',
      movie:'',
      seat:''
    };
  }
  render() {
    return (
      <div className="book">
        Book Container
      <p>{this.state.step}</p>
        <div>
        {this.state.step === 1 && <div>예매1</div>}
        {this.state.step === 2 && <CinemaSelect/>}
        {this.state.step === 3 && <DateSelect/>}
        {this.state.step === 4 && <MovieSelect/>}
        {this.state.step === 5 && <SeatSelect/>}
        {this.state.step === 6 && this.setState({step : 1})}
        </div>
          <div onClick={() => this.setState({step:this.state.step+1})} className="nextButton">next_step</div>
      </div>
    );
  }
}

export default BookContainer;