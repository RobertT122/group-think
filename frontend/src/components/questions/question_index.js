import React, { Component } from 'react';
import QuestionIndexItem from './question_index_item';

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
        const { questions, toggleActive } = this.props; //array of question objects & the function to toggle the status of the question index item

        return (
            <div className='question-index-container'>
                {questions.map(
                    question => <QuestionIndexItem key={question.id} question={question} toggleActive={toggleActive} />
                )}
            </div>
        )
    }
}