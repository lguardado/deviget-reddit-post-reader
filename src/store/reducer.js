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
                posts: [...action.payload.posts]
            }
        case actionTypes.ITEM_CLICKED:
            let updatedPosts = state.posts.map(post => {
                return (post.data.id === action.payload.item_id) ?
                    { ...post, ...post.data.clicked = true } : post
            })
            const foundItem = state.posts.find(item => item.data.id === action.payload.item_id)
            const selectedItem = {
                ...foundItem,
                data: {
                    ...foundItem.data
                }
            }
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
                    posts: state.posts.filter(item => item.data.id !== action.payload.item_id),
                    selectedItem: null
                }
            }
            return {
                ...state,
                posts: state.posts.filter(item => item.data.id !== action.payload.item_id),
            }
        case actionTypes.CLEAR_POSTS:
            return {
                ...state,
                posts: [],
                selectedItem: null
            }
        default:
            return state
    }
}

export default reducer