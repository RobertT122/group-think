import React, { Component } from "react"
import { useState } from "react"
import { useEffect } from "react"

const AnswerLogic = (props) => {
  const initialState={time: 0, frame: 0}
  const [state, setState] = useState(initialState)
  const [timerReady, setTimerReady] = useState(false)
  const [answer, setAnswer] = useState({question_id: null, weight: 0})

  //fetches question and starts timer
  useEffect(() => {
    console.log("fetching question")
    setTimeout(()=>{        
      startTimer()
    }, 1000)
  }, [])

  const startTimer = () => {
    setState({time: 20, frame: 1})
    setTimerReady(true)
  }

  //increments timer and sets a frame to control what components are displayed
  useEffect(() => {
    if(!timerReady){
      console.log("content not loaded")
    } else {
      console.log("content loaded")
      const interval = setInterval(() => {
        console.log("tick!")
        setState(state=> {
          if (state.time > 1){
            return Object.assign({},state, {time: state.time - 1})
          }
          switch(state.frame){
            case 1:
              return {time: 40, frame: 2};
            case 2:
              return {time: 0, frame: 3}
            default:
              clearInterval(interval)
              return state
          }
        })
      }, 100);
    }
  }, [timerReady]);
  
  const earlyStop = ()=>setState({time:0, frame: 3})
  const setInput = (bool) => setAnswer((prev) => Object.assign({}, prev, {input: bool, weight: state.time}))

  //setInput(true)

  const frameComponent = () => {
    switch(state.frame){
      case 1:
        return <h1>Reading a Question</h1>
      case 2:
        return <button onClick={()=> {
          setInput(true)
          earlyStop()
        }}>Answer</button> //yes
      case 3:
        return <h2>done!</h2>
      default:
        return <h1>loading..</h1>
    }
  }

  return(
    <div>
      <h2
        // style={colorFrame(state.frame)}
      >{state.time/10} : {state.frame}</h2>
      {frameComponent()}

      {/* {(state.done)? <button onClick={resetTimer}>reset</button>: <></>} */}
    </div>
  )
  //using the done state we can affect trigger the store to change state 
  //which will cause the page to change what it is rendering
}

export default AnswerLogic



