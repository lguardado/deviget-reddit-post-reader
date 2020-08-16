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
        case actionTypes.ITEM_DISMISSED:
            // If the dismissed item is in the details view, reset the details (selected item)
            if (state.selectedItem && state.selectedItem.data.id === action.payload.item_id) {
                return {
                    ...state,
                    posts: [...state.posts].filter(item => item.data.id !== action.payload.item_id),
                    selectedItem: null
                }
            }
            return {
                ...state,
                posts: [...state.posts].filter(item => item.data.id !== action.payload.item_id),
            }
        case actionTypes.CLEAR_POSTS:
            return {
                ...state,
                posts: [],
            }
        default:
            return state
    }
}

export default reducer