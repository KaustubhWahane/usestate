import './App.css';
import React , {useState} from 'react';

function App() {
  let  [count ,setCount] = useState(0);
  function decrement (){
    setCount(prevcount =>  prevcount - 1);
    setInterval(prevcount => prevcount * 1)
  }
  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <p>{count}</p>
      <button>+</button>
    </div>
  )
}

export default App;
