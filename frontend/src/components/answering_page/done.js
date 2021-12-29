import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './answering_page.css'

export default class Done extends Component {

    componentDidMount() {
        console.log("mounting")
        this.props.submitAnswer(this.props.answer)
    }

    result(){
        if (this.props.answer.input) {
            return <h2 className='result'>Yes</h2>
        } else if (this.props.answer.input === false) {
            return <h2 className='result'>No</h2>
        } else {
            return <h2 className='result'>Time's Up</h2>
        }
    }

    render() {
        const { question } = this.props;

        return (
            <div className='done-container'>
                <div className='question-text-container'>
                    <p className='text'>{question.text}</p>
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
