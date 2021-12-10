import React, { Component } from 'react'

export default class Reading extends Component {
    render() {
        const { question, time } = this.props;
        return (
            <div className='reading-container'>
                <div className='user-container'>
                    <img className='user-image' src="https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png" alt="" />
                    <p>{question.user} asks...</p>
                </div>
                <div className='quesiton-text-container'>
                    <p className='text'>{question.text}</p>
                </div>
                <div className='timer'>
                    <p>{time}</p>
                </div>
            </div>
        )
    }
}