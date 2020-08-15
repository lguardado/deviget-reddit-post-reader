import * as actionTypes from './actionTypes'

const initialState = {
    posts: [],
    selectedItem: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.payload.posts]
            }
        case actionTypes.ITEM_CLICKED:
            const updatedPosts = [...state.posts]
            updatedPosts.forEach(post => {
                if (post.data.id === action.payload.item_id) {
                    // Setting this to true intentionally
                    // so it can't be marked as unread by clicking again
                    post.data.clicked = true
                }
            })
            const selectedItem = state.posts.find(item => item.data.id === action.payload.item_id)
            return {
                ...state,
                posts: updatedPosts,
                selectedItem: selectedItem,
            }
        default:
            return state
    }
}

export default reducer