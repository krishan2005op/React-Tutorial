/* eslint-disable no-unused-vars */
// useref() = "use refrence" does not re-renders when its value changes.
//            when you want a component to remember some information
//            but you don't want that information to trigger new renders.

// 1. Accessing / Interacting with DOM elements
// 2. handlaing Focus, Animations and Transitions
// 3. Managing Timers and itervals

import React, {useState,useEffect,useRef} from 'react'

function MyComponent(){

    const ref = useRef(0);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick(){
        ref.current = ref.current + 1
        console.log(ref.current);
    }
       
    return(
    <>
        <button onClick={handleClick}> 
            click me!!
        </button>
    </>
    );
}

export default MyComponent;