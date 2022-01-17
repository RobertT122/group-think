import React from 'react'

export default function ExplainForm({openModal}) {
    return (
        <div className='explain-form-container'>
            Here's where users can post questions to be answered by others
            <button onClick={() => openModal('form')}  className='modal-next-btn'>Next</button>
        </div>
    )
}
