 import React from 'react';
 import './profile.css'

 export default function UserProfile({ currentUser }) {
     return (
         <div className='user-profile-container'>
            <div className='user-image-container'>
                <img className='user-image' src="https://www.pinclipart.com/picdir/middle/355-3553881_stockvader-predicted-adig-user-profile-icon-png-clipart.png" alt="" />
            </div>
            <div className='user-details-container'>
                <p className='name'>{currentUser.username}</p>
            </div>
            <div className='group-think-score-container'>
                <p>1495</p>
            </div>
         </div>
     )
 }