import React from 'react';
import ReactDOM from 'react-dom';

export class Greeting extends React.Component {
  render() {
  	if (this.props.signedIn == false) {
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
}
/*
Select Greeting.js.

Look in Greeting‘s render function. You can see that Greeting now expects two props: name and signedIn.

Notice that this.props.signedIn is not located inside of a return statement. This means that 
Greeting will never display the value of “signedIn.” But Greeting will use that value to decide 
whether to display a friendly greeting or “GO AWAY.”

Look at Greeting until you feel like you understand how it works, and then open App.js.

Inside of App‘s render function, on line 12, pass <Greeting /> a second prop of signedIn={false}.
*/