import React from "react"
import { useState } from "react"
import { useEffect } from "react"

const CountdownClock = (props) => {
  const initialState={time:props.initialTime, done: false}
  const [state, setState] = useState(initialState)
  const [effect, resetEffect] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      setState(state=> {
        if (state.time > 0){
          return Object.assign({},state, {time: state.time - 1})
        }
        clearInterval(interval)
        return {time: 0, done: true};
        }
      )
    }, 100);
    return () => clearInterval(interval);
  }, [effect]);

  const resetTimer = () =>{
    resetEffect({})
    setState(initialState)
  }

  return(
    <div>
      <h2>{state.time/10}</h2>
      {(state.done)? <button onClick={resetTimer}>reset</button>: <></>}
    </div>
  )
  //using the done state we can affect trigger the store to change state 
  //which will cause the page to change what it is rendering
}

export default CountdownClock