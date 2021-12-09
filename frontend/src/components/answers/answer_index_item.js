import React, { Component } from 'react'

export default class AnswerIndexItem extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { answer, openModal } = this.props;
        const question = answer.question;

        return (
            <div className='answer-index-item-container' onClick={() => openModal('question-show')}>
                <p className='question-body'>{question}</p>
                <p className='question-res'>{answer.input ? "YES" : "NO"}</p>
                <p className='delta-points'>+35</p>
            </div>
        )
    }
}
