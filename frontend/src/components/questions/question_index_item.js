import React, { Component } from 'react'; 
import './question_index.css';

export default class QuestionIndexItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { question, toggleActive } = this.props;

        return (
            <div className='question-index-item-container'>
                <p className='question-body'>{question.text}</p>
                { question.active ? <button onClick={toggleActive} className='toggle-active-btn'>Deactivate</button> : "" }
            </div>
        )
    }
}
