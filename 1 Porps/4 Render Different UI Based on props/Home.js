import React from 'react';
import ReactDOM from 'react-dom';
import { welcome } from './welcome';

class Home extends React.Component {
  render() {
    return <welcome name='Ludwig van Beethoven' />;
  }
}

ReactDOM.render(
  <Home />, 
  document.getElementById('app')
);