import React, { Component } from 'react';

export default class QuestionForm extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this) //becuase i use this in the handlesubmit function 
        //whats the schema of the question lookin like? will use it to configure my state
        this.state = {}
    }

    handleSubmit(){
        //most likely something like this 
        //createQuestion will update both the state and the backend 
        this.props.createQuestion(this.state); 
    }

    render() {

        return (
            <div className='question-form-container' >
                <form className='question-form' onSubmit={this.handleSubmit}>
                    <label className='question-form-label'>Ask a question
                        <input 
                            type="text" 
                            value='Example: Should I eat donuts for dinner?'
                            className='question-form-input-text'
                            />
                    </label>
                    <label className='question-form-label'>Timer
                        <input 
                            type="number" 
                            value='Time allocated for answers'
                            className='question-form-input-time'
                            />
                    </label>
                    <input type="submit" value='Post Question' />
                </form>
            </div>
        )
    }
}
