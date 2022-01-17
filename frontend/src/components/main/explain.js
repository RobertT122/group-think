import React from 'react'
import '../modal/modal.css'

export default function Tutorial({openModal}) {
    return (
        <div className="modal-tutorial-container">
            Here's the user profile where users can see information related to themselves.
            <button onClick={() => openModal('form')}  className='modal-next-btn'>Next</button>
        </div>
    )
}
