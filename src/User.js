import React, { Component } from "react";
import "./User.css";

class User extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      Profile: "",
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="conatiner">
        <form>
          <fieldset className="conatiner1">
            <legend>UserData</legend>
            firstName:
            <input type="text" />
            <br />
            <br />
            lastName:
            <input type="text" />
            <br />
            <br />
            Gender:
            <input type="radio" value="male" name="gender" />
            Male
            <input type="radio" value="female" name="gender" />
            female
            <br />
            <br />
            Country:
            <select>
              <option>please select Country</option>
              <option>India</option>
              <option>Russia</option>
              <option>China</option>
              <option>America</option>
            </select>
            <br />
            <br />
            Hobbies:
            <input type="checkbox" name="hobbies[]" />
            Dancing
            <input type="checkbox" name="hobbies[]" />
            Singing
            <input type="checkbox" name="hobbies[]" />
            Sports
            <input type="checkbox" name="hobbies[]" />
            WatchingMovies
            <br />
            <br />
            ProfileImage:
            <input type="file" name="profileImage" onChange={(e) => this.setState({ Profile: e.target.value })} />
            <br />
            <br />
            Email:
            <input
              type="email"
              name="email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <br />
            <br />
            <input className="submit" type="submit" name="submit" />
            <input className="submit" type="reset" name="reset" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default User;
