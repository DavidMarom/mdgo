const initialState = {
    photos: []
}

export function photos(state = initialState, action = {}) {
    switch (action.type) {

        case 'FETCH_PHOTOS':
            return { ...state, photos: action.photos }

        case 'DELETE_PHOTO':
            return { ...state, photos: state.photos.filter(photo => photo.id !== action.id) }

        default:
            return state
    }
}