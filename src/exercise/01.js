// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// the first argument of the use reducer function is the current state
// the second is the action
function countReducer(count, step) {
  return count + step
}

function Counter({initialCount = 0, step = 10}) {
  const [count, changeCount] = React.useReducer(countReducer, initialCount)

  const increment = () => changeCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
