import React, { Component } from 'react'; 
import './question_index.css';
import ExtendedContainer from './extended_container';

//responsible for rendering every individual question 
export default class QuestionIndexItem extends Component {
    constructor(props) {
        super(props)
        this.state = { show: false }
        this.onClick = this.onClick.bind(this)
        this.toggleShow = this.toggleShow.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleReactivate = this.handleReactivate.bind(this)
    }

    onClick(e){
        e.preventDefault()
        this.props.deactivate(this.props.question._id)
    }

    handleDelete() {
        this.props.removeQuestion(this.props.question._id)
    }

    handleReactivate() {
        this.props.reactivate(this.props.question._id)
    }

    toggleShow() {
        const bool = !this.state.show;
        this.setState({ show: bool })
    }

    render() {
        const { question } = this.props;
        return (
            <div className={`question-index-item-container-${question.active ? "active" : "inactive"}`}>
                <div className={!this.state.show ? 'hide' : 'show-btn-exp'} >
                    Press close to get question responses
                </div>
                <div onClick={this.handleDelete.bind(this)} className='close-x'>X</div>
                <div className='question-body'>{question.text}</div>
                { question.active ? <button onClick={this.onClick} className='toggle-active-btn'>Close</button> : "" }
                { question.active ? <div onMouseLeave={this.toggleShow} onMouseEnter={this.toggleShow} className='question-mark-container-close'><i className="fas fa-question"></i></div> : "" }
                { question.active ? "" : <ExtendedContainer question={question} />}
                { question.active ? "" : <button onClick={this.handleReactivate.bind(this)} className='reactivate-btn'>Open</button> }

            </div>
        )
    }
}
