import React, { Component } from "react";
import CinemaSelect from 'container/book/CinemaSelect';
import DateSelect from 'container/book/DateSelect';
import MovieSelect from 'container/book/MovieSelect';
import SeatSelect from 'container/book/SeatSelect';

import "./BookContainer.scss";

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { step : 1,
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
        </div>
          <div onClick={() => this.setState({step:this.state.step+1})} className="nextButton">next_step</div>
      </div>
    );
  }
}

export default BookContainer;