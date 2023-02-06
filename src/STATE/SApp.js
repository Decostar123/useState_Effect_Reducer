import React, { useState } from "react";
import "./App.css";
function App() {
  const [state, setState] = useState({ val: 0, action: "no_change" });
  const { val, action } = state;
  function decr() {
    setState((prevState) => {
      return { val: prevState.val - 1, action: "minus" };
    });
  }
  function incr() {
    setState((prevState) => {
      return { val: prevState.val + 1, action: "plus" };
    });
  }
  return (
    <div>
      <button onClick={incr}>+</button>
      <br></br>
      <span>{val}</span>
      <span>{action}</span>
      <br></br>
      <button onClick={decr}>-</button>
    </div>
  );
}
export default App;
