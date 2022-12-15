import React, {useState} from "react";

function App(){
  const [count, setCount] = useState(0)
  const decreaseClick = () => setCount(c => c-1)
  const increaseClick = () => setCount(c => c+1)
  return(
    <div>
      <div>
        <div>Count : {count}</div>
      </div>
      <div>
        <button onClick={decreaseClick}>decrease</button>
        <button onClick={increaseClick}>increase</button>
      </div>
    </div>
  )
}
export default App;