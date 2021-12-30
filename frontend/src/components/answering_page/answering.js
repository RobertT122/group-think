import React, { Component } from 'react'
import './answering_page.css'

export default class Answering extends Component {

    render() {
        const { setInput, time, question } = this.props;
        return (
            <div className='answering-container'>
                <div className='question-text-container-ans'>
                    <p className='text'>{question.text}</p>
                </div>

                <div onClick={()=> { 
                            setInput(true)
                        }}  
                     className='hell-yes'></div>
                <div 
                    onClick={()=> { 
                            setInput(false)
                        }} 
                    className='hell-no'></div>
                <div className='time-answering-pg'>
                    <p className='timer-answering-pg'>{Math.floor(time/10)}</p>
                </div>
            </div>
        )
    }
}
