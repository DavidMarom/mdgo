import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { httpService } from '../services/httpService'

export const PhotosContainer = () => {
    const [photoList, setPhotoList] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => { httpService.get('photos').then((res) => setPhotoList(res.data)) }, []);

    const getPhotosPerPage = () => {
        let start = (page - 1) * 12;
        let chunk = photoList.slice(start, start + 12)
        return chunk;
    }

    const handleBack = () => { if (page > 1) { setPage(page - 1) } }
    const handleNext = () => { if (page <= photoList.length / 12) { setPage(page + 1) } }

    if (photoList.length > 0) {
        console.log(photoList.length)
        console.log(photoList.length / 12)
        return (
            <>

                <div className='pagination'>
                    <button className={page > 1 ? 'btn-01' : 'btn-disabled'} onClick={handleBack}>Back</button>
                    <h2>{page}</h2>
                    <button className={page < (photoList.length / 12) ? 'btn-01' : 'btn-disabled'} onClick={handleNext}>Next</button>
                </div>

                <div className='photos-grid'>
                    {getPhotosPerPage().map(
                        (element, idx) => <Card key={idx} data={element} />
                    )}
                </div>
            </>
        )
    } else {
        return <h1>Loading</h1>
    }
}
