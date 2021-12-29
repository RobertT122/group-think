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
        this.props.fetchUserQuestions(this.props.currentUser._id); //rerendering effect
        this.setState({text: ""})
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    randomExample() {
        const examples = [
            "Do you get scared when lights are off and you are home alone?", 
            "Should I eat donuts for dinner?", 
            "Should I pick my nose?",
            "Is it true that accountants have the worst job ever?",
            "Is it true that girls never fart?",
            "Are pandas in fact a menace to bamboos?",
            ""
        ]

        const index = Math.floor(Math.random() * 6)
        return examples[index]
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
                            placeholder={this.randomExample()}
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