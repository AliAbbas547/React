import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import User from "./User";
import SmallCase from "./SmallCase";
import Product from "./Pages/Product";
import Payment from "./Pages/Payment";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Practice1 from "./Practice/Practice1";
import Man from "./component/Man";
import Practice2 from "./component/Practice2";

const root= ReactDOM.createRoot( document.getElementById("root") ) ;
root.render(
<div>
   <div><Practice1/></div>
  <div><Practice2/></div> 
  
  <BrowserRouter>
  <Routes>
    
    <Route path="/Man" element={<Man/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/User" element={<User/>}/>
    <Route path="/SmallCase" element={<SmallCase/>}/>
    <Route path="/App" element={<App title="DON" think="very Useful" language="English"/>}/>
    <Route path="/Product" element={<Product/>}/>
    <Route path="/Payment" element={<Payment/>}>
    <Route path=":Price" element={<Payment/>}/>
    </Route>
    <Route path="*" element={<Error/>}/>
  </Routes>
  </BrowserRouter>
</div>
  
);

