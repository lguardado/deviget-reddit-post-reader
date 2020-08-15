import * as actionTypes from './actionTypes'

const initialState = {
    posts: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.payload.posts]
            }
        default:
            return state
    }
}

export default reducer