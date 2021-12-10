import React, { Component } from 'react'

export default class Answering extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { setInput, earlyStop, time, question } = this.props;
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
                    <p>{time}</p>
                </div>
            </div>
        )
    }
}
