import React, { Component } from 'react'; 

export default class QuestionIndexItem extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const { question, toggleActive } = this.props;

        return (
            <div className='question-index-item-container'>
                <p className='time-stamp'>{question.createdAt}</p>
                <p className='question-body'>{question.body}</p>
                <button onClick={toggleActive} className='toggle-active-btn'>Activate/Deactivate Question</button>
            </div>
        )
    }
}
