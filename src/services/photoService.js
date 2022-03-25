import { httpService } from '../services/httpService'

export const photoService = {
    getPhotos
};

function getPhotos() {
    return httpService.get('photos').then(res => res.data)
}

