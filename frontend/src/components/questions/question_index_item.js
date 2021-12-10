import React, { Component } from 'react'; 
import './question_index.css';
import ExtendedContainer from './extended_container';

export default class QuestionIndexItem extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick(e){
        e.preventDefault()
        this.props.deactivate(this.props.question._id)
        this.props.fetchUserQuestions(this.props.currentUser._id) //rerender the component 
    }

    render() {
        const { question } = this.props;

        return (
            <div className={`question-index-item-container-${question.active ? "active" : "inactive"}`}>
                <p className='question-body'>{question.text}</p>
                { question.active ? <button onClick={this.onClick} className='toggle-active-btn'>Deactivate</button> : "" }
                { question.active ? "" : <ExtendedContainer question={question} />}
            </div>
        )
    }
}
