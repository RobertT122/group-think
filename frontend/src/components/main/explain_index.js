import React from 'react'

export default function ExplainIndex({openModal}) {
    return (
        <div className='explain-index-container'>
            Here, users can see the questions they've asked. To see responses, press close and then choose between the charts.
            <button onClick={() => openModal('answer')}  className='modal-next-btn'>Next</button>
        </div>
    )
}
