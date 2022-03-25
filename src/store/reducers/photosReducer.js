const initialState = {
    photos: []
}

export function photos(state = initialState, action = {}) {
    switch (action.type) {

        case 'FETCH_PHOTOS':
            return { ...state, photos: action.photos }

        case 'DELETE_PHOTO':
            return { ...state, photos: state.photos.filter(photo => photo.id !== action.id) }

        case 'UPDATE_PHOTO':
            return { ...state, photos: state.photos.map(photo => (action.photo.id === photo.id ? action.photo : photo)) }
            // users: state.users.map(user => (action._user._id === user._id) ? action._user : user)


        default:
            return state
    }
}