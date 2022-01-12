import React, { Component } from 'react'; 
import './question_index.css';
import ExtendedContainer from './extended_container';

//responsible for rendering every individual question 
export default class QuestionIndexItem extends Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }

    onClick(e){
        e.preventDefault()
        this.props.deactivate(this.props.question._id)
        // this.props.fetchUserQuestions(this.props.currentUser._id) 
    }

    handleDelete() {
        this.props.removeQuestion(this.props.question._id)
    }

    handleReactivate() {
        this.props.reactivate(this.props.question._id)
        // this.props.fetchUserQuestions(this.props.currentUser._id)
    }

    render() {
        const { question } = this.props;
        return (
            <div className={`question-index-item-container-${question.active ? "active" : "inactive"}`}>
                <div onClick={this.handleDelete.bind(this)} className='close-x'>X</div>

                <div className='question-body'>{question.text}</div>
                { question.active ? <button onClick={this.onClick} className='toggle-active-btn'>Close</button> : "" }
                { question.active ? "" : <ExtendedContainer question={question} />}
                { question.active ? "" : <button onClick={this.handleReactivate.bind(this)} className='reactivate-btn'>Open</button> }

            </div>
        )
    }
}
