import React, { Component } from 'react';
import AnswerIndexItem from './answer_index_item';

export default class AnswerIndex extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUserAnswers(this.props.currentUser.id)
    }

    render() {
        const { answers, openModal } = this.props;
        return (
            <div className='answer-index-container'>
                {answers.map(
                    answer => <AnswerIndexItem key={answer._id} answer={answer} openModal={openModal} />
                )}
            </div>
        )
    }
}