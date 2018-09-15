import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_POSTS, RECEIVE_POSTS, REQUEST_DELETE, RECEIVE_DELETE, NEW_POST, NEW_POST_SUCCESS, REQUEST_POST, RECEIVE_POST, UPDATE_POST, UPDATE_POST_SUCCESS } from './actions/index';
import api from "./apis";

function* getPosts() {
    try {
      const response = yield call(api.posts);
      yield put({ type: RECEIVE_POSTS, data: response.data });
    } catch (err) {
      console.log(err);
    }
}

function* getPost(action) {
  try {
    const { id } = action;
    const response = yield call(api.getPost, id);
    yield put({ type: RECEIVE_POST, data: response.data });
  } catch (err) {
    console.log(err);
  }
}

function* removePost(action){
    try {
      const { id } = action;
      yield call(api.deletePost, id);
      const response = yield call(api.posts);
      yield put({ type: RECEIVE_DELETE, data: response.data });
    } catch( err ) {
      console.log(err);
    }
}

function* createPost(action){
   try {
     const { data } = action;
     const response = yield call(api.addPost,data);
     yield put({ type: NEW_POST_SUCCESS, data: response });
   } catch ( err ) {
     console.log( err );
   }
}

function* updatePost(action){
  try {
    const { data } = action;
    const response = yield call(api.editPost,data);
    yield put({ type: UPDATE_POST_SUCCESS, data: response });
  } catch ( err ) {
    console.log( err );
  }
}

export default function* mySaga(){
    yield takeLatest(REQUEST_DELETE, removePost);
    yield takeLatest(REQUEST_POSTS, getPosts);
    yield takeLatest(REQUEST_POST, getPost);
    yield takeLatest(NEW_POST, createPost);
    yield takeLatest(UPDATE_POST, updatePost);
}