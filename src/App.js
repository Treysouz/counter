import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  //This is where we are going to put our methods:

  increment = () => {
    if (this.state.count < 20) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <section className="container">
        <header className="navBar">
          <nav>
            <h1>Counter.js</h1>
          </nav>
        </header>
        <div className="counter">
          <h2>{this.state.count}</h2>
        </div>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <button type="button" onClick={this.decrement}>
          Decrement
        </button>
      </section>
    );
  }
}

export default Counter;
