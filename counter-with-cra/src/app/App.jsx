
import './App.css';
import { Counter } from '../components';

function App() {
  //console.log('rendering App Component');
  return (
    <div className="App">
      <Counter count={9}/>
      <Counter />
    </div>
  );
}

export default App;

