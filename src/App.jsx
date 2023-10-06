import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App bg-[#F0EFE9] h-screen flex flex-col items-center gap-6">
      < Header />
      <TodoList />
    </div>
  );
}

export default App;