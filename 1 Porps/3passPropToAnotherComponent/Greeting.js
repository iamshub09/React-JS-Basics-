import React from 'react';
//import ReactDOM from 'react-dom';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

/*
ReactDOM.render(
  <Greeting name='Groberta' />, 
  document.getElementById('app')
);
*/