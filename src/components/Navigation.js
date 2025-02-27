import React from "react";



import { Routes, Route, NavLink, HashRouter } from 'react-router-dom';


import Calories from "./Calories";
import Home from "./Home";




const Navigation = () => {



  return (
    <>
      <HashRouter basename="/">
      <div className="navContainer">
        <div className="navigation">
        <NavLink to="/" className="button">
           HOME
            </NavLink> 
            <NavLink to="/calories" className="button">
           CALORIES
            </NavLink> 

        </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calories" element={<Calories />} />
        </Routes>
      </HashRouter>
    </>
  )
}
export default Navigation;