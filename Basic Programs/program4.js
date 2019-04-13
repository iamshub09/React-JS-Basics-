import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
  render() {
    let friend = friends;
  	return (
    	<div>
        <h1>{friend[0].title}</h1>
        <img src={friend[0].src} />
			 <h1>{friend[1].title}</h1>
        <img src={friend[1].src} />
 <h1>{friend[2].title}</h1>
        <img src={friend[2].src} />
			</div>

  	);
	}
}

ReactDOM.render(<Friend />, document.getElementById('app'));