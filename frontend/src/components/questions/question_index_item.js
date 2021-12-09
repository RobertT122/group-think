import React, { Component } from 'react'; 
import './question_index.css';

export default class QuestionIndexItem extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick(e){
        e.preventDefault()
        this.props.deactivate(this.props.question._id)
        window.location.reload(false);
    }

    render() {
        const { question, deactivate } = this.props;

        return (
            <div className='question-index-item-container'>
                <p className='question-body'>{question.text}</p>
                { question.active ? <button onClick={this.onClick} className='toggle-active-btn'>Deactivate</button> : "" }
            </div>
        )
    }
}
