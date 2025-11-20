import React, { Component } from "react";

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ margin: "50px" }}>
        <h1>Welcome to Geeks for Geeks</h1>
        <h2>Counter App using Class Component :</h2>
        <h1>{this.state.count}</h1>

        <button onClick={this.increment}>Add</button>
      </div>
    );
  }
}

export default CounterApp;
