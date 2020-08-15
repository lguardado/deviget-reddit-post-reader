import * as actionTypes from './actionTypes';

export const savePosts = ( posts ) => {
    return {
        type: actionTypes.SAVE_POSTS,
        payload: {posts: posts}
    }
}

export const itemClicked = ( item ) => {
    return {
        type: actionTypes.ITEM_CLICKED,
        payload: {item_id: item}
    }
}