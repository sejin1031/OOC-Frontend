import React, {Component} from 'react';

const options = [
  { value : 'Ansan', label : 'Ansan'},
  { value : 'Seoul', label : 'Seoul'},
  {value : 'Busan', label : 'Busan'}
]

class CinemaSelect extends Component{
  render(){
    return(
      <div>
        <select>
          <option value="ansan">Ansan</option>
          <option value="seoul">seoul</option>
          <option value="busan">busan</option>
        </select>
      </div>
    );
  }
}

export default CinemaSelect;