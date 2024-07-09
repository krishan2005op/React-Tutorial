/*Conditional rendering - allows you to control what gets rendered 
                          in your applictionbased on certain conditions
                          (show,hide or change components) 
*/

import UserGreeting from "./UserGreeting.jsx"

function App() {
 

  return (
    <>
      <UserGreeting isLoggedIn = {true} username="Krishan"/>
    </>
  )
}

export default App
