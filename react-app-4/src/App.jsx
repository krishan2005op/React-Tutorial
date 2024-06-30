// props = read-only properties that are shared between components
//         A parent component cn send data to child component.
// <Component key= value />
import Student from "./students";
function App() {
  

  return (
    <>
      <Student name="spongebob" age = {30} isStudent={true}/>
      <Student name="Patrick" age = {42} isStudent={false}/>
      <Student name="squidward" age = {50} isStudent={false}/>
      <Student name="sandy" age = {27} isStudent={true}/>
    </>
  );
}

export default App
