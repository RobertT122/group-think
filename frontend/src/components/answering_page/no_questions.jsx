import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './answering_page.css'

export default class NoQuestions extends Component {

    render() {
        return (
          <div className='no-question-div'>
            <img className='photo-no-question' src="https://wallpaperaccess.com/full/1751008.jpg" alt="" />
            <div className='no-question-text'>
              <h2 >No new questions found</h2>
            </div>
            <div className='link-container'>
              <Link className='home-link' to="/" >Return Home</Link>
            </div>
          </div>
        )
    }
}