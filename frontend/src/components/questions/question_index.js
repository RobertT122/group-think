import React, { Component } from 'react';
import QuestionIndexItem from './question_index_item';
import QuestionFormContainer from '../questions/question_form_container';

import './question_index.css';

export default class QuestionIndex extends Component {
    constructor(props){
        super(props)
    }

    //when the component mounts, fetch all the questions of the current user and update the state 
    componentDidMount(){
        this.props.fetchUserQuestions(this.props.currentUser.id);
    }

    render() {
        //need to iterate through the questions array and map out new arr of questions index items 
        const { questions, deactivate } = this.props; //array of question objects & the function to toggle the status of the question index item

        return (
            <div className='question-index-container'>
                <QuestionFormContainer />
                {questions.map(
                    (question, idx) => <QuestionIndexItem key={idx} question={question} deactivate={deactivate} />
                )}
            </div>
        )
    }
}