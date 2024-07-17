/* eslint-disable no-unused-vars */
import React,{useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [Age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("spongebog")
        console.log(name);
    }

    const incrementAge = () => {
        setAge(a => (a+3));
        setAge(a => (a+3));
        setAge(a => (a+3));
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set name</button>

                <p>Age: {Age}</p>
                <button onClick={incrementAge}>Increment Age</button>

                <p>Is employed: {isEmployed? "YES" : "NO"}</p>
                <button onClick={toggleEmployedStatus}>Toggle Status</button>

            </div>
        </>
    )
}

export default MyComponent;