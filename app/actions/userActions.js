import { CHANGE_TEXT, SUBMIT_FORM } from '../constants/ActionTypes';

export function fetchCoords() {
	return function(dispatch) {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				var initialLong = JSON.stringify(position.coords.longitude);
				var initialLat = JSON.stringify(position.coords.latitude);
				dispatch(fetchTest({ initialLong, initialLat }));
			},
			(error) => dispatch({ type: "FETCH_COORDS_REJECTED", payload: error })
		);
	}
}

export function fetchTest(coords) {
	return function(dispatch) {
		fetch('http://172.16.1.2:3000/testing.json', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				coordinates: coords
			})
		})
		.then((response) => response.json())
		.then((respJSON) => {
			dispatch({ 
				type: 'FETCH_COORDS_FULFILLED',
				payload: respJSON.body
			});
		})
		.catch((error) => console.error(error))
	}
}

export function changeTxt(field, text) {
	return {
		type: CHANGE_TEXT,
		text,
		field,
	}
}

export function submitForm(fields) {
	return function(dispatch) {
		dispatch({
			type: 'FETCH_USER'
		});
		fetch('http://172.16.1.2:3000/login.json', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				session: fields
			})
		})
		.then((response) => response.json())
		.then((respJSON) => {
			dispatch({
				type: 'FETCH_USER_FULFILLED',
				payload: respJSON.body
			});
		})
		.catch((error) => alert(error))
	}
}