import React ,{Component} from "react"
import Man from "./Man"
class Person extends Component {
 constructor(props) {
    super(props);
    this.props= props;
    this.state= {
        name: "Shreya Singh",
        age:22,
        timing:45
    };
  
 }
 nameChange(){
    alert("hello")
    console.log(this.props)
    this.setState({name:"Ali Abbas",timing:20});
}
 render(){                                                                    
    return (
        <div>
            <h1>hello this is{this.state.name},{this.state.timing} </h1>
            <button onClick={()=> this.nameChange()}>Click me</button>
            
        </div>
    )
 }
}

export default Person;