import { GET_VIDEOS} from '../actions/types';

const INITIAL_STATE ={
	all_videos: []
};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case GET_VIDEOS:
			return {...state, all_videos: action.payload.data} ;
		default:
			return state;
	}
}