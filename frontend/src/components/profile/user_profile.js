 import React from 'react';
 
 export default function UserProfile({ currentUser }) {
     return (
         <div className='user-profile-container'>
            <div className='user-image-container'>

            </div>
            <div className='user-details-container'>
                <p className='name'>{currentUser.name}</p>
                <p className='occupation'>{currentUser.occupation}</p>
            </div>
            <div className='group-think-score-container'>
                <p className='group-think-score'>{currentUser.score}</p>
            </div>
         </div>
     )
 }