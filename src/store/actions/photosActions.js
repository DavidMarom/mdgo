import { photoService } from '../../services/photoService';

export function fetchPhotos() {
	return async (dispatch) => {
		const photos = await photoService.getPhotos();
		dispatch({ type: 'FETCH_PHOTOS', photos });
	};
}

export function deletePhoto(id) {
	return async (dispatch) => {
		dispatch({ type: 'DELETE_PHOTO', id });
	};
}

export function updatePhoto(photo) {
	return async (dispatch) => {
		dispatch({ type: 'UPDATE_PHOTO', photo });
	};
}
