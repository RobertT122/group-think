import React, { Component } from 'react'

export default class Loading extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='loading-container'>    
                <p className='text'>Give us a moment to fetch the question</p>    
            </div>
        )
    }
}
