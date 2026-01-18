import { useState } from 'react'
import './App.css'

function App() {
  // Define the state variable 'count' and the function to update it 'setCount'
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Experiment 1: Simple Counter</h1>
      
      <div className="counter-box">
        {/* The UI updates dynamically whenever 'count' changes */}
        <h2>Count is: {count}</h2>
        
        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>
          
          <button onClick={() => setCount(count - 1)}>
            Decrement
          </button>
          
          <button onClick={() => setCount(0)} className="reset-btn">
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App