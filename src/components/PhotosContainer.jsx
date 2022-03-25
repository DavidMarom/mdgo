import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { EditModal } from './EditModal'
import { useSelector } from 'react-redux'


export const PhotosContainer = () => {
    // const dispatch = useDispatch()

    const ITEMS_PER_PAGE = 12;
    // const [photoList, setPhotoList] = useState([]);
    const [page, setPage] = useState(1);
    const [editedItem, seteditedItem] = useState(null)

    const photos = useSelector((state) => state.photos.photos);

    const getPhotosPerPage = () => {
        let start = (page - 1) * ITEMS_PER_PAGE;
        let chunk = photos.slice(start, start + ITEMS_PER_PAGE)
        return chunk;
    }

    const handleBack = () => { if (page > 1) { setPage(page - 1) } }
    const handleNext = () => { if (page <= photos.length / ITEMS_PER_PAGE) { setPage(page + 1) } }

    const editItem = (item) => { seteditedItem(item); }

    useEffect(() => {
        console.log('photos in useEffect', photos.length)
    }, [photos])


    if (photos.length > 0) {
        return (
            <>
                {editedItem ? <EditModal /> : null}

                <div className='pagination'>
                    <button className={page > 1 ? 'btn-01' : 'btn-disabled'} onClick={handleBack}>Back</button>
                    <h2>{page}</h2>
                    <button className={page < (photos.length / ITEMS_PER_PAGE) ? 'btn-01' : 'btn-disabled'} onClick={handleNext}>Next</button>
                </div>

                <div className='photos-grid'>
                    {getPhotosPerPage().map((element, idx) => <Card key={idx} data={element} edit={editItem} />)}
                </div>
            </>
        )
    } else {
        return <h1>Loading</h1>
    }
}
