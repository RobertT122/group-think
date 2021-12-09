import React, { Component } from 'react'

export default class Answering extends Component {
    //need to grab the active questions that are made by this user 
    constructor(props){
        super(props)
    }

    componentDidMount(){
        //this.props.fetchActiveQuestions()
    }

    //each time we press on an answer --> state counter changes += 1 and causes rerendering?

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
