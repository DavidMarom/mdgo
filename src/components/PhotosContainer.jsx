import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { EditModal } from './EditModal'
import { useSelector, useDispatch } from 'react-redux'
import { deletePhoto } from '../store/actions/photosActions'


export const PhotosContainer = () => {
    const dispatch = useDispatch()

    const ITEMS_PER_PAGE = 12;
    const [pageNumber, setPage] = useState(1);
    const [editedItem, seteditedItem] = useState(null)
    const photos = useSelector((state) => state.photos.photos);

    const getPhotosPerPage = () => {
        let start = (pageNumber - 1) * ITEMS_PER_PAGE;
        let chunk = photos.slice(start, start + ITEMS_PER_PAGE)
        return chunk;
    }

    const handleBack = () => { if (pageNumber > 1) { setPage(pageNumber - 1) } }
    const handleNext = () => { if (pageNumber <= photos.length / ITEMS_PER_PAGE) { setPage(pageNumber + 1) } }

    // These functions are passed as props to the Card component
    const editItem = (item) => { seteditedItem(item); }
    const deleteItem = (itemId) => { dispatch(deletePhoto(itemId)); }
    const clearEdit = () => { seteditedItem(null); }

    const titleTaken = (title) => {
        // Check if title is already taken
        let found = false;
        let i = 0;

        while (i < photos.length) {
            if (photos[i].title === title) {
                found = true;
                break;
            }
            i++;
        }
        return found;
    }

    if (photos.length > 0) {
        return (
            <>
                {editedItem ? <EditModal item={editedItem} clearEdit={clearEdit} titleTaken={titleTaken} /> : null}

                <div className='pagination'>
                    <button className={pageNumber > 1 ? 'btn-01' : 'btn-disabled'} onClick={handleBack}>Back</button>
                    <h2>{pageNumber}</h2>
                    <button className={pageNumber < (photos.length / ITEMS_PER_PAGE) ? 'btn-01' : 'btn-disabled'} onClick={handleNext}>Next</button>
                </div>

                <div className='photos-grid'>
                    {getPhotosPerPage().map((element, idx) => <Card key={idx} data={element} edit={editItem} deleteItem={deleteItem} />)}
                </div>
            </>
        )
    } else {
        return <h1>Loading</h1>
    }
}
