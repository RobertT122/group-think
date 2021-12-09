import React, { Component } from 'react';
import AnswerIndexContainer from '../answers/answer_index_container';
import './right.css';

export default class Right extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { openModal, openMain, currentUser } = this.props;
        
        //need a way to access the current user's past responses and delta points 

        return (
            <div className='right-bar-container'>
                <div className='ans-questions-container'>
                    <button className='ans-questions-btn'>Answer Questions</button>
                </div>
                <AnswerIndexContainer />
            </div>
        )
    }
}
