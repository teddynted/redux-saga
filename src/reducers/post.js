import { RECEIVE_POST } from '../actions/index';

export default ( state = "", { type, data } ) => {
   switch(type){
      case RECEIVE_POST:
        return data;
      default: 
        return state;
   }
}