import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import SignUp from "./routes/SignUp";

export default function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
      
      
    </div>
  )
}
    

