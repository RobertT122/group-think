import React, { Component } from 'react'
import './answering_page.css'

export default class Answering extends Component {

    render() {
        const { setInput, time, question } = this.props;
        return (
            <div className='answering-container'>
                <div className='question-text-container'>
                    <p className='text'>{question.text}</p>
                </div>
                <div className='button-container'>
                    <button 
                        onClick={()=> { 
                            setInput(true)
                        }} 
                        className='yes'>Yes</button>    
                    <button 
                        onClick={()=> { 
                            setInput(false)
                        }} 
                        className='no'>No</button>    
                </div>
                <div className='time'>
                    <p className='timer'>{Math.floor(time/10)}</p>
                </div>
            </div>
        )
    }
}
