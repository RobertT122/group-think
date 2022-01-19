import React from 'react'

export default function ExplainScore({closeModal}) {
    return (
        <div className='explain-score-container'>
            The GroupThink score (-1984, 1984) represents how a user has answered in comparison to others. A high score means a user thinks like others and vice-versa. 
            <button onClick={closeModal}  className='modal-next-btn'>Close</button>
        </div>
    )
}
