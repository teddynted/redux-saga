export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_DELETE = "REQUEST_DELETE";
export const NEW_POST = "NEW_POST";
export const UPDATE_POST = "UPDATE_POST";
export const REQUEST_POST = "REQUEST_POST";
export const RECEIVE_POST = "RECEIVE_POST";

export const requestPosts = () => ({ type: REQUEST_POSTS });
export const receivePosts = data => ({ type: RECEIVE_POSTS, data });
export const requestPost = id => ({ type: REQUEST_POST, id });
export const receivePost = data => ({ type: RECEIVE_POST, data });
export const requestDelete = id => ({ type: REQUEST_DELETE, id });
export const newPost = data => ({ type: NEW_POST, data });
export const updatePost = data => ({ type: UPDATE_POST, data });