import logo from './logo.svg';
import './App.css';
import Login from './components/Login.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Login/>
        </a>
      </header>
    </div>
  );
}

export default App;