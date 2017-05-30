import {GET_BOOKS, GET_BOOK, GET_BOOKS_ELASTIC} from '../actions/types';

const INITIAL_STATE ={
	all: [], book: null
};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case GET_BOOKS:
			return {...state, all: action.payload.data} ;
		case GET_BOOKS_ELASTIC:
			return {...state, all: action.payload.data} ;
		case GET_BOOK:
			return {...state, book: action.payload.data} ;
		default:
			return state;
	}
}