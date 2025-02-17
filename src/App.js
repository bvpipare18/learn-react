import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Header/>
      <TodoItem/>
      <Button/>
    </div>
  );
}

export default App;
