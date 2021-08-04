// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// the first argument of the use reducer function is the current state
// the second is the action
function countReducer(count, newCount) {
  return newCount
}

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = React.useReducer(countReducer, initialCount)

  const increment = () => {
    // refereed to as the dispatch function
    setCount(count + step)
  }
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
