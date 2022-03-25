import React, { useState, useEffect } from 'react'


export const EditModal = ({ item, clearEdit }) => {

    const [image, setImage] = useState(item.thumbnailUrl)
    const [title, setTitle] = useState(item.title)

    const [titleErr, setTitleErr] = useState(null)
    const [urlErr, setUrlErr] = useState(null)

    const [validForm, setValidForm] = useState(true)

    const handleTitleChange = (ev) => { setTitle(ev.target.value); }
    const handleUrlChange = (ev) => {
        setImage(ev.target.value);


    }

    useEffect(() => {
        let errors = 0;
        // Validate title
        if (title === '') { errors++; setTitleErr('Title cannot be empty') } else { setTitleErr('') }

        // Validate URL
        var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        if (!(expression.test(image))) {
            errors++;
            setUrlErr('Bad URL');
        } else { setUrlErr('') }


        errors === 0 ? setValidForm(true) : setValidForm(false)

    }, [title, image])



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
                        <div className='form-line'>
                            <p className='w-150'>Title </p>
                            <input value={title} onChange={handleTitleChange} />
                        </div>

                        <div className='form-line'>
                            <div className='w-150'></div>
                            <div className='error-text'>{titleErr}</div>
                        </div>

                        <div className='form-line'>
                            <p className='w-150'>Image </p>
                            <input value={image} onChange={handleUrlChange} />
                        </div>

                        <div className='form-line'>
                            <div className='w-150'></div>
                            <div className='error-text'>{urlErr}</div>
                        </div>
                    </div>
                </div>

                <div className='space-around'>
                    <div onClick={clearEdit} className="cancel-btn noselect"><p>Cancel</p></div>
                    <div className={(validForm ? 'save-btn noselect' : "btn-disabled noselect")}          ><p>Save</p></div>
                </div>
            </div>
        </div>
    )
}
