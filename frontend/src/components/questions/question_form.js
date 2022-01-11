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
        this.props.composeQuestion(this.state) //first allow us to create the question on the backened and upon complete grab the user questions 
            .then(() => this.props.fetchUserQuestions(this.props.currentUser._id)) 
        this.setState({text: ""})
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    randomExample() {
        const examples = [
            "Do you get scared when the lights are off and you are home alone?", 
            "Should I eat donuts for dinner?", 
            "Can I wear jeans to a wedding?",
            "Do accountants have the worst job ever?",
            "Should I celebrate my dogs birthday?",
            "Are pandas cute?",
            "Do woodchucks chuck wood?",
            "Are egg yolks healthy?"
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