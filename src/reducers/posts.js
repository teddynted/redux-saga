import { RECEIVE_POSTS, RECEIVE_DELETE } from '../actions/index';

export default ( state = "", { type, data } ) => {
   switch(type){
      case RECEIVE_POSTS:
        return data;
      case RECEIVE_DELETE:
        return data;
      default: 
        return state;
   }
}