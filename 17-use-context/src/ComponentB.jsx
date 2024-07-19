/* eslint-disable no-unused-vars */
// useContext() = react hook that allows to share values between 
//                multiple level of components
//                without passing props through each level

import React, {useState,useContext} from "react";
import ComponentC from "./ComponentC ";
function ComponentB(){

    return(
    <>
        <div className="box">
            <h1> Component B </h1>
            <ComponentC />
        </div>

    </>
    )
}

export default ComponentB;