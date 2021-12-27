import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import Loading from "./loading"
import ReadingContainer from './reading_container'
import AnsweringContainer from './answering_container'
import DoneContainer from "./done_container"
import { connect } from "react-redux"
import { fetchNextQuestion } from "../../actions/question_actions"

const AnswerLogic = (props) => {
  const initialState={time: 0, frame: 0}
  const [state, setState] = useState(initialState)
  const [timerReady, setTimerReady] = useState(false)
  const [answer, setAnswer] = useState({question_id: null, weight: 0})


  // fetches question and starts timer
  useEffect(() => {
    console.log(props.questionArr)
    props.fetchNextQuestion().then(startTimer)
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
      setAnswer((prev) => Object.assign({},prev,{question_id: props.question._id}))
      console.log("content loaded")
      const interval = setInterval(() => {
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
        return <ReadingContainer time={state.time} question={props.question}/>
      case 2:
        return <AnsweringContainer time={state.time}  setInput={setInput} question={props.question}/> //yes
      case 3:
        //On componenet did mount set the submit the answer
        //Will need to add the dispatch for the answer
        return <DoneContainer question={props.question} answer={answer}/>
      default:
        return <Loading />
    }
  }

  return(
    <div>

      <h2 className='timer'>{state.time/10} : {state.frame}</h2>
      {frameComponent()}

      {/* {(state.done)? <button onClick={resetTimer}>reset</button>: <></>} */}
    </div>
  )
  //using the done state we can affect trigger the store to change state 
  //which will cause the page to change what it is rendering
}


const mapSTP = (state) => ({
  question: state.questions.next[0]
})

const mapDTP = dispatch => ({
  fetchNextQuestion: () => dispatch(fetchNextQuestion())
})

export default connect(mapSTP, mapDTP)(AnswerLogic)

//"61b2cab3591d7da95231d5bd"
//"61b2cab3591d7da95231d5bd"



