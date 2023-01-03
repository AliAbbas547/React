import React from "react";
import "./SmallCase.css";

class SmallCase extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      bool: false,
    };
  }

  update;

  render() {
    console.log(this.state.input);
    return (
      <div className="container">
        <textarea className="cont"
          value={this.state.input}
          onChange={(event) => this.setState({ input: event.target.value })}
        ></textarea>
        <br />
        <br />

        <button className="cont1" onClick={(event) => this.setState({ bool: !this.state.bool })}>
        display in toUpperCase
        </button>
        <br />
        <br />
        {this.state.bool && <p className="cont2">{this.state.input.toUpperCase()}</p>}
      </div>
    );
  }
}

export default SmallCase;
