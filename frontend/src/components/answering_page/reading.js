import React, { Component } from 'react'
import './answering_page.css'

export default class Reading extends Component {
    

    render() {
        const { question, time} = this.props;
        if (question){
            return (
                <div className='reading-container'>
                    <div className='user-container'>
                        <img className='user-image' src="https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png" alt="" />
                        <p className='user-text'>{question.user.username} asks...</p>
                    </div>
                    <div className='question-text-container'>
                        <p className='text'>{question.text}</p>
                    </div>
                    <div className='time'>
                        <p className='timer'>{Math.floor(time/10)}</p>
                    </div>
                </div>
            )
        } else {
            return <></>
        }
    }
}