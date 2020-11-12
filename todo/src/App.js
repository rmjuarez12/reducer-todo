// Import assets
import "./App.css";

// Import Components
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Todo App</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
