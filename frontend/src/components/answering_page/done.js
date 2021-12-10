import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Done extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("mounting")
        this.props.submitAnswer(this.props.answer)
    }

    result(){
        if (this.props.answer.input) {
            return <h2>Yes</h2>
        } else if (this.props.answer.input === false) {
            return <h2>No</h2>
        } else {
            return <h2>Time's Up</h2>
        }
    }

    render() {
        const { question, answer } = this.props;

        return (
            <div className='done-container'>
                <div className='question-text-container'>
                    <p>{question.text}</p>
                </div>
                <div className='result-container'>
                {this.result()}
                </div>
                <div className='next-container'>
                    <button className='next-question' onClick={()=>window.location.reload(false)}>Next Question</button>
                </div>
                <div className="go-home">
                    <Link to="/">Home</Link>
                </div>
            </div>
        )
    }
}
