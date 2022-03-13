import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import App from "../../App";
import AddEmployee from "../employee/AddEmployee";
import EoMonth from "../employee/EoMonth";
import UpdateEmp from "../employee/UpdateEmp";
import Main from "../Main";



const CustomRoute = () => {
  return (
    <>
        <Routes>
          <React.Fragment>
            <>
               <Route exact path="/" element={<Main/>}> </Route>
               <Route  path="/add" element={<AddEmployee/>}> </Route> 
               <Route  path="/eom" element={<EoMonth/>}> </Route> 

            </>
          </React.Fragment>
        </Routes>

    </>
  )
}


export default CustomRoute;