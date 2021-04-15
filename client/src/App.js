
import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    // increment the count
    setCount(count + 1)
  }
  


  return (
    <div>
      <h4>{count}</h4>
      <button onClick = {handleIncrement}>Increment</button>

    </div>
  )
}


export default App;
