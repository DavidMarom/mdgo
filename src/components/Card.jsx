import React from 'react'

export const Card = ({ data, edit, deleteItem }) => {
    if (data) {
        return (
            <div className='card'>
                <div className='card-title'>
                    <p>{data.title}</p>
                </div>
                <div className='space-between'>
                    <img alt="" src={data.thumbnailUrl} />
                    <div></div>
                    <div className='flex-end'>
                        <button className='edit-btn' onClick={() => edit(data.id)} ><i className="fas fa-edit"></i></button>
                        <button className='delete-btn' onClick={() => deleteItem(data.id) } ><i className="far fa-trash-alt"></i></button>

                    </div>
                </div>

            </div >
        )
    }
    else {
        return <h1>Image is loading</h1>
    }
}
