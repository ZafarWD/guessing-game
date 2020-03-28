import React, { Component } from "react";

class GameForm extends Component {
  state = {
    value: "",
    random: 0,
    isSubmitted: false,
    isCorrect: false
  };

  componentDidMount() {
    const { randomRange } = this.props;
    const random = Math.ceil(Math.random() * (randomRange * 100));
    this.setState({ random });
  }

  handleChange = ({ currentTarget: input }) => {
    let value = parseInt(input.value) ? parseInt(input.value) : "";
    this.setState({ value, isSubmitted: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isSubmitted: true });
  };

  renderResult() {
    const { value, random } = this.state;
    const difference = Math.abs(value - random);
    if (difference === 0) {
      this.props.onResult(this.props.randomRange);
    } else if (difference >= 1 && difference <= 4)
      return <div className="alert alert-danger">Hot!</div>;
    else if (difference >= 5 && difference <= 15)
      return <div className="alert alert-warning">Warm!</div>;
    else return <div className="alert alert-primary">Cold!</div>;
  }

  render() {
    const { value } = this.state;
    const { randomRange: level } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="row container mt-5 pt-2">
            <div className="col-12">
              <h1>Welcome to level: {level}</h1>
              <br />
            </div>
            <div className="col-9 text-center input-group">
              <input
                type="text"
                className="form-control"
                value={value || ""}
                onChange={this.handleChange}
                placeholder={`Enter from 1 to ${level * 100}...`}
                autoFocus
              />
            </div>
            <div className="col-3">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
            {this.state.isSubmitted && (
              <div className="col-9 mt-4">{this.renderResult()}</div>
            )}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default GameForm;
