/* eslint-disable no-unused-vars */
import React,{useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count  === 0) {
            setCount(count)
        }
        else{
            setCount(count - 1);
        }
    }

    const restart = () => {
        setCount(count - count);
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