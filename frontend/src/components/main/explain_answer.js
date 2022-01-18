import React from 'react'

export default function ExplainAnswer({closeModal}) {
    return (
        <div className='explain-answer-container'>
            Finally, press this button to begin answering others' questions!
            <button onClick={closeModal}  className='modal-next-btn'>End</button>
        </div>
    )
}
