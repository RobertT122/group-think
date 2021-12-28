 import React from 'react';
 import './profile.css'

 export default function UserProfile({ currentUser }) {
     return (
         <div className='user-profile-container'>
            <div className='user-image-container'>
                <img className='user-image-profile' src="https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png" alt="" />
            </div>
            <div className='user-details-container'>
                <p className='name'>{currentUser.username}</p>
                <p className='job'>{currentUser.job}</p>
            </div>
            <div className='group-think-score-container'>
                <p className='score'>1984</p>
            </div>
         </div>
     )
 }