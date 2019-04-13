import React from 'react';

class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
}
/* 
Take a look in the code editor. On lines 4 through 8, an event handler method is defined, 
with similar syntax as the render method. 
On line 12, that event handler method is attached to an event (a click event, in this case).
*/