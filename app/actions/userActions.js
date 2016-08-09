export function fetchUser() {
	return function(dispatch) {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				var initialLong = JSON.stringify(position.coords.longitude);
				var initialLat = JSON.stringify(position.coords.latitude);
				dispatch({ 
					type: "FETCH_USER_FULFILLED",
					payload: {
						initialLong: initialLong,
						initialLat: initialLat,
					},
				});
			},
			(error) => dispatch({ type: "FETCH_USER_REJECTED", payload: error })
		);
	}
}