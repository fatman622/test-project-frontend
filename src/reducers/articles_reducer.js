import { GET_ARTICLES } from '../actions/types';

const INITIAL_STATE ={
	all_articles: []
};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case GET_ARTICLES:
			return {...state, all_articles: action.payload.data} ;
		default:
			return state;
	}
}