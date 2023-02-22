import logo from '../assets/logo.svg';
import './App.css';

function App() {
  console.log('rendering App Component');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> 파일을 수정하면{' '} 
          <abbr title="Hot Module Replacement">HMR</abbr>, Live Reload 됩니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
