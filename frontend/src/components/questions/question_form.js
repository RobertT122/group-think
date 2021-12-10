import React, { Component } from 'react';
import { withRouter } from "react-router";

class QuestionForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: "",

        }

        this.handleSubmit = this.handleSubmit.bind(this); //becuase i use this in the handlesubmit function 
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.composeQuestion(this.state);
        this.props.fetchUserQuestions(this.props.currentUser._id);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    render() {

        return (
            <div className='question-form-container' >
                <form className='question-form' onSubmit={this.handleSubmit}>
                    <label className='question-form-label'>Ask a question
                        <input 
                            type="text" 
                            onChange={this.update('text')}
                            value={this.state.text}
                            placeholder='Example: Should I eat donuts for dinner?'
                            className='question-form-input-text'
                            />
                    </label>
                    
                    <input className='question-form-submit' type="submit" value='Post Question' />
                </form>
            </div>
        )
    }
}

export default withRouter(QuestionForm);