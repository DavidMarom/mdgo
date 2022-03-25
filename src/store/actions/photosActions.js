import { photoService } from '../../services/photoService';

export function fetchPhotos() {
	return async (dispatch) => {
		const photos = await photoService.getPhotos();
		dispatch({ type: 'FETCH_PHOTOS', photos });
	};
}
