import React, { Component } from 'react';
import QuestionIndexItem from './question_index_item';
import QuestionFormContainer from '../questions/question_form_container';

import './question_index.css';

export default class QuestionIndex extends Component {

    componentDidMount() {
        this.props.fetchUserQuestions(this.props.currentUser.id);
    }

    render() {
        const { questions, deactivate, fetchUserQuestions, currentUser, removeQuestion, reactivate } = this.props; 

        return (
            <div className='question-index-container'>
                <QuestionFormContainer fetchUserQuestions={fetchUserQuestions} currentUser={currentUser} />
                {questions.map(
                    (question, idx) => <QuestionIndexItem key={idx} removeQuestion={removeQuestion} reactivate={reactivate} fetchUserQuestions={fetchUserQuestions} currentUser={currentUser} question={question} deactivate={deactivate} />
                )}
            </div>
        )
    }
}