import AddList from "./components/AddList";
import List from "./components/List";
import Menu from "./components/Menu";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const handleTodos = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center">
      <div className="w-2/6 p-4 gap-y-10">
        <Navigation />
        <AddList addTodo={handleTodos} />
        <Menu todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
