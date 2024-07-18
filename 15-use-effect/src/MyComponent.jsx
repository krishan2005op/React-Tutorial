// useEffect() = React hook that tells react to Do SOME CODE WHEN (pick one);
//               this component re-renders
//               this coponent mounts
//               this state of a value

// useEffect(function, [dependices])

// 1. useEffect(() => {}) // runs after every re-render
// 2. useEffect(() => {}, [])  //runs only on mount
// 3. useEffect(() => {}, [value]) //Run on mount + whne value changes

//USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fecthing data from an API
// #5 Clean up when a component unmounts

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from 'react'

function MyComponent() {

    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green")

    useEffect(() => {
        document.title = `Count ${count} ${color}`
    }, [count,color]);

    function addCount(){
        setCount(c => c+1)
    }

    function subtractCount(){
        setCount(c => c-1)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green")
    }

    return (
    <>
        <p style={{color:color}}>  Count: {count}</p>
        <button onClick={addCount}>ADD</button>
        <button onClick={subtractCount}>SUTRACT</button><br/>

        <button onClick={changeColor}>CHANGE COLOR</button>
    </>
    )
}

export default MyComponent;