import * as actionTypes from './actionTypes';

export const savePosts = (posts) => {
    return {
        type: actionTypes.SAVE_POSTS,
        payload: { posts: posts }
    }
}

export const itemClicked = (item_id) => {
    return {
        type: actionTypes.ITEM_CLICKED,
        payload: { item_id }
    }
}

export const itemSelected = (item) => {
    return {
        type: actionTypes.ITEM_SELECTED,
        payload: { item }
    }
}

export const itemDismissed = (item) => {
    return {
        type: actionTypes.ITEM_DISMISSED,
        payload: {item_id: item}
    }
}


export const clearPosts = () => {
    return {
        type: actionTypes.CLEAR_POSTS
    }
}