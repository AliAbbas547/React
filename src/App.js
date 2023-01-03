import "./App.css"
import Person from "./component/Person"
import Man from "./component/Man"

const App= (props)=>{
  
    return (
        <div className="bold">
          <div className="first" ><img className="t1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="google" /></div>
          <div className="second">
            <div className="first1">
            <img className="t2" src="https://www.pngitem.com/pimgs/m/10-103234_speaker-icon-png-image-free-download-searchpng-google.png" alt="speaker"/>
            </div>
            </div>
          <div className="third"> 
            <button className="third1">
              
              <div className="third2"> {props.title}</div>
            </button>
            <button className="third1">
              <div className="third2">{props.think}</div>
            </button>
            <div className="fourth">
              <div className="fourth1">google offerdin:{props.language}</div>
            </div>
          </div>
        

          
        </div>
    )
}

export default App 
