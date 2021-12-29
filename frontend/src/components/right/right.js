import React from 'react';
import { useHistory } from 'react-router';

import './right.css';

const Right = (props) => {
// export default (props) => {

    // const { openModal, openMain, currentUser } = props;
    
    //need a way to access the current user's past responses and delta points 
    let history = useHistory()

    return (
        <div className='right-bar-container'>
            <div className='ans-questions-container'>
                <button className='ans-questions-btn' onClick={() => history.push('/answers')}>Answer Questions</button>
            </div>
            
        </div>
    )

}

export default Right
