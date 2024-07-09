//React Hook  = special function that allows functional components
//              to use react features without writing class compnonents(React v16.8)
//              (useState, useEffect, useContext, useReducer, usecallback, and more....)

import Counter from "./counter"
// eslint-disable-next-line no-unused-vars
import MyComponent from "./myComponent"

//useState() = A react hook that allows the creation of a stateful variable
//             AND setter function to update its value in the virtual DOM.
//             [name,setName]

function App() {


  return (
    <>
      <Counter/>
    </>
  )
}

export default App
