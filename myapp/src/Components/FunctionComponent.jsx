import React, { useState } from "react";

function FunctionComponent(props) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const [changeName, setChangeName] = useState("");
  return (
    <div>
      <p>Iam function Component</p>
      <button onClick={increment}>Click to increment</button>
      <button onClick={decrement}>click to decrement</button>
      <h2>{count}</h2>
      <br />
      <h4>{props.name}</h4>
      <h4>{props.age}</h4>
      <input type="text" onChange={(e) => setChangeName(e.target.value)} />
      <button onClick={() => props.setName(changeName)}> click</button>
    </div>
  );
}

export default FunctionComponent;
