import React, { Component } from 'react'

export default class Answering extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { setInput, earlyStop, time } = this.props;
        return (
            <div className='answering-container'>
                <div className='question-text-container'>
                    <p className='text'>Does sea urchin taste good?</p>
                </div>
                <div className='button-container'>
                    <button 
                        onClick={()=> { 
                            setInput(true)
                            earlyStop()}
                        } 
                        className='yes'>Yes</button>    
                    <button 
                        onClick={()=> { 
                            setInput(false)
                            earlyStop()}
                        } 
                        className='no'>No</button>    
                </div>
                <div className='time'>
                    <p>{time}</p>
                </div>
            </div>
        )
    }
}
