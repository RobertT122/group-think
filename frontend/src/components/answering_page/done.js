import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './answering_page.css'

export default class Done extends Component {

    componentDidMount() {
        this.props.submitAnswer(this.props.answer)
    }

    result(){
        if (this.props.answer.input) {
            return (
                <div className='res-div'>
                    <div className='proxy'>
                        <p className='placeholder'>You answered</p> 
                    </div>
                    <div className='res-div-2'>
                        <h2 className='result-yes'>Yes</h2>
                    </div>
                </div>
            )
        } else if (this.props.answer.input === false) {
            return (
                <div className='res-div'>
                    <div className='proxy'>
                        <p className='placeholder'>You answered</p> 
                    </div>
                    <div className='res-div-2'>
                        <h2 className='result-no'>No</h2>
                    </div>
                </div>
            )
        } else {
            return <h2 className='result-done'>Time's Up</h2>
        }
    }

    render() {
        const { question } = this.props;

        return (
            <div className='done-container'>
                <img className='photo-no-question' src="https://wallup.net/wp-content/uploads/2017/11/23/500424-minimalism-animals-birds.jpg" alt="" />
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
