import React, { useState } from 'react'


export const EditModal = ({ item, clearEdit }) => {

    const [image, setImage] = useState(item.thumbnailUrl)
    const [title, setTitle] = useState(item.title)

    // console.log(item)

    return (
        <div className='modal-container'>
            <div className='edit-modal'>
                <h1 className='space-around'>Edit</h1>




                <div className='modal-form'>

                    <div className='space-between'>
                        <p>Photo id: {item.id}</p>
                        <img src={image} alt="" />
                    </div>

                    <div>
                        <div>
                            <p>Title </p>
                            <input value={title} size="70" onChange={ev => setTitle(ev.target.value)} />
                        </div>
                        <div>
                            <p>Image </p>
                            <input value={image} size="70" onChange={ev => setImage(ev.target.value)} />
                        </div>
                    </div>


                </div>


                <div className='space-around'>
                    <div className='save-btn noselect'><p>Save</p></div>
                    <div onClick={clearEdit} className="cancel-btn noselect"><p>Cancel</p></div>
                </div>

            </div>
        </div>

    )
}
