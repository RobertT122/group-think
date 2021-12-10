import React, { Component } from "react"
import { useState } from "react"
import { useEffect } from "react"
import Loading from "./loading"
import ReadingContainer from './reading_container'
import AnsweringContainer from './answering_container'
import DoneContainer from "./done_container"
import { connect } from "react-redux"

const AnswerLogic = (props) => {
  const initialState={time: 0, frame: 0}
  const [state, setState] = useState(initialState)
  const [timerReady, setTimerReady] = useState(false)
  const [answer, setAnswer] = useState({question_id: null, weight: 0})
  const [question, setQuestion]= useState({})

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
  
  const setInput = (bool) => {
    setState({time:0, frame: 3})
    setAnswer((prev) => Object.assign({}, prev, {input: bool, weight: state.time}))
  }

  const frameComponent = () => {
    switch(state.frame){
      case 1:
        // return <ReadingContainer time={state.time} />
        return <h2>Reading</h2>
      case 2:
        // return <AnsweringContainer time={state.time}  setInput={setInput} /> //yes
        return <h2>Answering</h2>
      case 3:
        //On componenet did mount set the submit the answer
        //Will need to add the dispatch for the answer
        // return <DoneContainer answer={answer}/>
        return <h3>Done!</h3>
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


const mapSTP = (state) => ({

})

const mapDTP = dispatch => ({
  
})

export default connect(mapSTP, mapDTP)(AnswerLogic)



