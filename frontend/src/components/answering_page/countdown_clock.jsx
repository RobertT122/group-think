import React, { Component } from "react"
import { useState } from "react"
import { useEffect } from "react"
import Loading from "./loading"
import ReadingContainer from './reading_container'
import AnsweringContainer from './answering_container'
import DoneContainer from "./done_container"

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

  const frameComponent = () => {
    switch(state.frame){
      case 1:
        return <ReadingContainer time={state.time} />
      case 2:
        return <AnsweringContainer time={state.time} earlyStop={earlyStop} setInput={setInput} /> //yes
      case 3:
        return <DoneContainer />
      default:
        return <Loading />
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



