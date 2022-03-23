import React from 'react'

export const Card = ({ data }) => {
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
                        <i class="fas fa-edit"></i>                    </div>
                </div>

            </div>
        )
    }
    else {
        return <h1>Image is loading</h1>
    }
}
