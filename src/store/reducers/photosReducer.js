const initialState = {
    photos: []
}

export function photos(state = initialState, action = {}) {
    switch (action.type) {

        case 'FETCH_PHOTOS':
            return { ...state, photos: action.photos }

        default:
            return state
    }
}