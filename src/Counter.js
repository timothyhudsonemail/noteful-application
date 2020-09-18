import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 5) {
        // Simulate a JS error
        throw new Error('I crashed!');
      }
      return <div>
          <p style={{color:"blue"}}>Counter</p>
          <p>Click the number to advance, <br /> but only to 5 <br /> before error</p>
          <h1 onClick={this.handleClick}>{this.state.counter}</h1>
          </div>
    }
}