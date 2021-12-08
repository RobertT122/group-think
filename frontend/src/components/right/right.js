import React, { Component } from 'react';
//will need to make new react index item component for the right side specifically and map over it
import RightIndexItem from './right_index_item';

export default class Right extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { openModal, openMain, currentUser } = this.props;
        
        //need a way to access the current user's past responses and delta points 

        return (
            <div className='right-bar-container'>
                <div className='ans-questions-container'>
                    <button className='ans-questions-btn'>Answer Questions</button>
                </div>
                <div className='past-res-container'>
                    {}
                </div>
            </div>
        )
    }
}
