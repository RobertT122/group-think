import React, { Component } from 'react';

export default class Extended extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchQuestionAnswers()
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
