import './App.css';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="TodoContainer">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
