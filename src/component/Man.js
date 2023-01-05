import React, { Component } from "react";
import Person from "./Person";

export class Man extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "Ali Abbas",
          age: 11,
        },
        {
          name: "Shreya singh",
          age: 23,
        },
        {
          name: "jyoti Bissoyi",
          age: 23,
        },
        {
          name: "Ravi singh",
          age: 25,
        },
      ],
      total: false,
    };
  }

  render() {
    let persons;
    persons = this.state.person.map((x) => {
      return <Person name={x.name} age={x.age} />;
    });
    return (
      <div>
        <button onClick={() => this.setState({ total: !this.state.total })}>
          Click me
        </button>
        {this.state.total && <p> {persons}</p>}
      </div>
    );
  }
}

export default Man;
