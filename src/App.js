import React, { Component } from "react";

import GameForm from "./components/GameForm";

class App extends Component {
  state = { array: [1] };

  handleResult = level => {
    if (this.state.array.includes(level + 1)) return;
    const array = [...this.state.array];
    array.push(level + 1);
    // console.log("hello");
    this.setState({ array });
  };
  render() {
    return (
      <React.Fragment>
        {this.state.array.map((item, i) => (
          <GameForm key={i} randomRange={item} onResult={this.handleResult} />
        ))}
      </React.Fragment>
    );
  }
}

export default App;
