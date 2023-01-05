import React, { Component } from "react";
import "./User.css";

class User extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      Profile: "",  
      fname:"",
      lname:"",
      country:"",
      gender:"",
      hobbies:""

    };
  }
    render() {
    
    return (
      <div className="conatiner">
        <form onSubmit={(e)=>{
          e.preventDefault();
          console.log("submitted")
        }}>
          <fieldset className="conatiner1">
            <legend>UserData</legend>
            firstName:
            <input type="text" onChange={(e) => this.setState({ fname: e.target.value })} required />
            <br />
            <br />
            lastName:
            <input type="text"  onChange={(e) => this.setState({lname: e.target.value })} required />
            <br />
            <br />
            Gender:
            <input type="radio" value="male" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} required />
            Male
            <input type="radio" value="female" name="gender" required />
            female
            <br />
            <br />
            Country:
            <select onChange={(e) => this.setState({ country: e.target.value })} >
              <option>please select Country</option>
              <option>India</option>
              <option>Russia</option>
              <option>China</option>
              <option>America</option>
            </select>
            <br />
            <br />
            Hobbies:
            <input onChange={(e) => this.setState({ hobbies: e.target.value })} type="checkbox" name="hobbies[]" />
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
            <input type="file" name="profileImage" onChange={(e) => this.setState({ Profile: e.target.value })}  required />
            <br />
            <br />
            Email:
            <input
              type="email"
              name="email"
              onChange={(e) => this.setState({ email: e.target.value })} required
            />
        
            <br />
            <br />
            <input className="submit" type="submit" name="submit" />
            <input className="submit" type="reset" name="reset" />
          </fieldset>
        </form>
        
      
            fname:{this.state.fname} <br/>
            lname:{this.state.lname} <br/>
            profile:{this.state.Profile} <br/>
            email:{this.state.email} <br/>
            country:{this.state.country} <br/>
            gender:{this.state.gender}<br/>
            hobbies:{this.state.hobbies}
          
      
      </div>
    );
  }
}

export default User;
