/* eslint-disable no-unused-vars */
// useContext() = react hook that allows to share values between 
//                multiple level of components
//                without passing props through each level

import React, {useState,useContext} from "react";
import ComponentD from "./ComponentD";
function ComponentC(){

    return(
    <>
        <div className="box">
            <h1> Component C </h1>
            <ComponentD />
        </div>

    </>
    )
}

export default ComponentC;