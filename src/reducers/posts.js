import { RECEIVE_POSTS, RECEIVE_DELETE, NEW_POST_SUCCESS, UPDATE_POST_SUCCESS } from '../actions/index';

export default ( state = "", { type, data } ) => {
   switch(type){
      case RECEIVE_POSTS:
        return data;
      case RECEIVE_DELETE:
        return data;
      case NEW_POST_SUCCESS:
        return data;
      case UPDATE_POST_SUCCESS:
        return data;
      default: 
        return state;
   }
}