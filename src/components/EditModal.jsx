import React from 'react'

export const EditModal = ({ item, clearEdit }) => {
    return (
        <div className='modal-container'>

            <div className='edit-modal'>

              

                <div className='modal-form'>
                    sdf
                </div>

                <div className='space-around'>
                    <div className='save-btn noselect'><p>Save</p></div>
                    <div><button onClick={clearEdit} className="close-btn">Cancel</button></div>
                </div>

            </div>
        </div>

    )
}
