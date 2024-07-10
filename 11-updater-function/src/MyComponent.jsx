//updater function = A function as an argument to setState() usually
//                   ex. setYear(count+1) => setYear(c => c+1)
//                   allow for safe updates based on the previous state
//                   Used with multiple state updates and asynchronous functions
//                   Good practice to use updater function




/* eslint-disable no-unused-vars */
import React,{useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount( prevCount => prevCount + 1);
        setCount( prevCount => prevCount + 1);
        setCount( prevCount => prevCount + 1);
    }

    const decrement = () => {

        
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
        
    }

    const restart = () => {
        setCount(0);
    }

    return(
        <>
            <h1> Count: {count} </h1>
            <div className="buttons">
                <button onClick={increment}>Increment</button>
                <button onClick={restart}>Restart</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </>
    )
}


export default Counter;