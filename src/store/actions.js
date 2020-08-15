import * as actionTypes from './actionTypes';

export const savePosts = ( posts ) => {
    return {
        type: actionTypes.SAVE_POSTS,
        payload: {posts: posts}
    };
};