// import logo from './logo.svg';
import react from "react";
import { useReducer, useState } from "react";
import Todo from "./Todo";
import "./App.css";
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

function reducer(todos, action) {
  // actually how can access name  , as it is mad forard so send the name along with the action inpput
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      // console.log("hi");
      // console.log(action.payload.name);
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((ele) => ele.id !== action.payload.id);
    default:
      return todos;
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}
function App() {
  const [todos, dispatch] = useReducer(reducer, []); // array to hols the array of items
  const [name, setName] = useState(""); // useSate holds the current status of object
  // see here the sepearet handleSubmit is made nut for the onChamge one it was not made
  function handleSubmit(e) {
    e.preventDefault();
    //NOTE DISPATCH IS TAKING IN INPUT 'TYPE' AND THE 'PAYLOAD' SO MULTIPLE THINGS OY ONE FUNCTION BY CHECKING THE
    // TYPE INSETEAD OF MAKING SEPERATE FUNCTION FOR SEPERATE WORK
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your TASK!!!"
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}
export default App;

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }
// function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   function incr() {
//     dispatch({ type: "increment" });
//   }
//   function decr() {
//     dispatch({ type: "decrement" });
//   }

//   return (
//     <div>
//       <button onClick={incr}>+</button>
//       <span>{state.count}</span>
//       <button onClick={decr}>-</button>
//     </div>
//   );
// }
