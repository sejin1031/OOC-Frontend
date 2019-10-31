import React, {Component} from 'react';

class SeatSelect extends Component{
  constructor(props){
    super(props);
    this.state = {
      seatData:[
        {row: "A",col :'1'},{row: "A",col :'2'},{row: "A",col :'3'},{row: "A",col :'4'},{row: "A",col :'5'},{row: "A",col :'6'},
        {row: "B",col :'1'},{row: "B",col :'2'},{row: "B",col :'3'},{row: "B",col :'4'},{row: "B",col :'5'},{row: "B",col :'6'},
        {row: "C",col :'1'},{row: "C",col :'2'},{row: "C",col :'3'},{row: "C",col :'4'},{row: "C",col :'5'},{row: "C",col :'6'},
        {row: "D",col :'1'},{row: "D",col :'2'},{row: "D",col :'3'},{row: "D",col :'4'},{row: "D",col :'5'},{row: "D",col :'6'}
      ]
    };
  }
  render(){
    return(
      <div>SeatSelect
        {this.state.seatData.map((seat,i) => {
          return (<SeatInfo row={seat.row}
                  col={seat.col}
                  key={i}/>);
        })}
      </div>
    );
  }
}

class SeatInfo extends React.Component{
  render(){
    return(
      <div className="seat">
        {this.props.row}{this.props.col}
      </div>
    )
  }
}

export default SeatSelect;