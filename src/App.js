import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count, setCount] = useState(0);


  return (
    <div className="App">
      <h1>Beep Booper</h1>
      <button onClick={()=>setCount(count +1)}>Boop</button>
      <p>You have beeped the booper {count} times.</p>
    </div>
  );
}

export default App;
