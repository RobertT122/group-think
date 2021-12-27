import React, { Component } from 'react';

export default class Extended extends Component {
    constructor(props){
        super(props)
        this.countYes = this.countYes.bind(this);
        this.countNo = this.countNo.bind(this);
    }

    componentDidMount(){
        this.props.fetchQuestionAnswers(this.props.question._id)
    }

    countYes() {
        let count = 0;
        //[1: {... input: true }, 3: {... input: false} ...]
        for (let i = 0; i < this.props.answers.length; i++) {
            const questionObj = this.props.answers[i];
            if (questionObj.input) count += 1
        }

        return count;
    }

    countNo() {
        let count = 0;
        //[1: {... input: true }, 3: {... input: false} ...]
        for (let i = 0; i < this.props.answers.length; i++) {
            const questionObj = this.props.answers[i];
            if (!questionObj.input) count += 1
        }

        return count;
    }


    render() {
        return (
            <div className='extended-container'>
                <p className='yeses'>{this.countYes()} Yeses</p>
                <p className='noes'>{this.countNo()} Noes</p>
            </div>
        )
    }
}
