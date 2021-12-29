import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './answering_page.css'

export default class NoQuestions extends Component {

    render() {
        return (
          <div>
            <h2>No new questions found</h2>
            <div>
              <Link to="/" >Home</Link>
            </div>
          </div>
        )
    }
}