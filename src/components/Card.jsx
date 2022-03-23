import React from 'react'

export const Card = ({ data }) => {
    if (data) {
        return (
            <div className='card'>
                <div className='card-title'>
                    <p>{data.title}</p>
                </div>
                <img alt="" src={data.thumbnailUrl} />
            </div>
        )
    }
    else {
        return <h1>Image is loading</h1>
    }
}
