import React, { useEffect } from 'react'
import { PhotosContainer } from './components/PhotosContainer'
import { fetchPhotos } from './store/actions/photosActions'
import { useDispatch } from 'react-redux'

import './assets/style/global.scss'

export function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPhotos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <PhotosContainer />
    </>
  );
}