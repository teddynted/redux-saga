import { RECEIVE_POSTS } from '../actions/index';

export default ( state = "", { type, data } ) => {
   switch(type){
      case RECEIVE_POSTS:
        return data;
      default: 
        return state;
   }
}