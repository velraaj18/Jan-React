import "./App.css";
import ClassComponent from "./Components/ClassComponent";
import FunctionComponent from "./Components/FunctionComponent";
import { useState } from "react";
function App() {
  const [name, setName] = useState("Raaj");
  return (
    <div>
      <p>Hello</p>
      <ClassComponent />
      <FunctionComponent name={name} age={21} setName={setName} />
    </div>
  );
}

export default App;
