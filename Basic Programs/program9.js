import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }
    scr() {
    return "kutte ke pille"
  }
  render() {
    return(
    <div>
  // every event call takes argument as a function
    <button onClick={this.scream}>AAAAAH</button>;
    <h1> {this.scr()}</h1>;
// elements takes functions as a property  
  </div>
)}}
ReactDOM.render(<Button />, document.getElementById('app'));


