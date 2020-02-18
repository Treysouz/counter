import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      doubleNum: false
    };
  }

  //This is where we are going to put our methods:

  increment = () => {
    if (this.state.count < 20) {
      if (this.state.doubleNum && this.state.count<19) {
        this.setState({
          count: this.state.count + 2
        });
      } else {
        this.setState({
          count: this.state.count + 1
        });
      }
    }
  };

  decrement = () => {
    if (this.state.count > 0) {
      if (this.state.doubleNum && this.state.count>1) {
        this.setState({
          count: this.state.count - 2
        });
      } else {
        this.setState({
          count: this.state.count - 1
        });
      }
    }
  };

  clear = () => {
    this.setState({
      count: 0
    });
  };

  doubleCount = () => {
    this.setState({
      doubleNum: !this.state.doubleNum
    });
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
        <button type="button" onClick={this.clear}>
          Clear
        </button>
        <button type="button" onClick={this.doubleCount}>
          {this.state.doubleNum ? "+2 (Double Count)" : "+1 (Single Count)"}
        </button>
      </section>
    );
  }
}

export default Counter;
