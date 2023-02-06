// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [rescType, setRescType] = useState("posts");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${rescType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [rescType]);
  // console.log(items);
  // return <pre>{JSON.stringify(item)}</pre>;
  // {items.map((item) => {
  //   return <pre>{rescType}</pre>;
  // })}
  return (
    <>
      <div>
        <button onClick={() => setRescType("posts")}>Posts</button>
        <button onClick={() => setRescType("users")}>Users</button>
        <button onClick={() => setRescType("comments")}>Comments</button>
      </div>
      <h1>{rescType}</h1>
      {/* {console.log(items)} */}
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>

    // </>
  );
}

export default App;
