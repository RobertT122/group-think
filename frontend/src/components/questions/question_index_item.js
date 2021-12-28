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
        //getting all the user's questions to invoke automatically rerender component--
        this.props.fetchUserQuestions(this.props.currentUser._id) //rerender the component? 
    }

    render() {
        const { question } = this.props;

        return (
            <div className={`question-index-item-container-${question.active ? "active" : "inactive"}`}>
                <div className='question-body'>{question.text}</div>
                { question.active ? <button onClick={this.onClick} className='toggle-active-btn'>Deactivate</button> : "" }
                { question.active ? "" : <ExtendedContainer question={question} />}
            </div>
        )
    }
}
