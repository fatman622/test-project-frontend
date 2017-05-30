import { GET_BOOKS, GET_BOOK, CREATE_BOOK, DELETE_BOOK, GET_BOOKS_ELASTIC,
	SIGN_IN, SIGN_OUT, SIGN_UP,
	GET_PROFILE, GET_PROFILES, UPDATE_PROFILE} from './types';
import axios from 'axios';
import cookie from 'react-cookie';

// const API_URL = "http://localhost:5000/api/v1" ;
const API_URL = "https://book-api-fatman622.herokuapp.com/api/v1" ;
if(cookie.load('headersCookie')){
	axios.defaults.headers = cookie.load('headersCookie');
}

// Books functions
export function getBooksElastic(props){
	const request = axios.get(`${API_URL}/books/search`, props); 

	return {
		type: GET_BOOKS_ELASTIC, 
		payload: request
	};
}

export function getBooks(props){
	const request = axios.get(`${API_URL}/books`, props);  
	return {
		type: GET_BOOKS,
		payload: request
	};
}

export function createBook(props){
	const request = axios.post(`${API_URL}/books`, props); 

	return {
		type: CREATE_BOOK,
		payload: request
	};
}

export function deleteBook(id){
	const request = axios.delete(`${API_URL}/books/${id}`); 
	
	return {
		type: DELETE_BOOK,
		payload: request
	};
}

export function getBook(id){
	const request = axios.get(`${API_URL}/books/${id}`); 
	return {
		type: GET_BOOK,
		payload: request
	};
}


// Users functions
export function signIn(props){
	const request = axios.post(`${API_URL}/auth/sign_in`, props); 
	return {
		type: SIGN_IN,
		payload: request
	};

}

export function signOut(){
	const request = axios.delete(`${API_URL}/auth/sign_out`); 
	return {
		type: SIGN_OUT,
		payload: request
	};
}

export function signUp(props){
	const request = axios.post(`${API_URL}/auth`, props); 
	return {
		type: SIGN_UP,
		payload: request
	};
}

export function getProfile(id){
	const request = axios.get(`${API_URL}/profiles/${id}`); 
	return {
		type: GET_PROFILE,
		payload: request
	};
}

export function getProfiles(){
	const request = axios.get(`${API_URL}/profiles`); 
	return {
		type: GET_PROFILES,
		payload: request
	};
}

export function updateProfile(id, data){
	var props = null;
	if(typeof FormData === "undefined"){
		props = [];
	}else{
		props = new FormData();
		props.append('first_name', data.first_name);
		props.append('last_name', data.last_name);
		props.append('date', data.date);
		if(data.avatar){
			props.append('avatar', data.avatar[0]);
		}
	}
	
	
	const request = axios.patch(`${API_URL}/profiles/${id}`, props); 
	return {
		type: UPDATE_PROFILE,
		payload: request
	};
}