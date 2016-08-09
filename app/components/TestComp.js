import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions';
import TappableRow from './TappableRow';

class TestComp extends Component {
	constructor(props) {
		super(props);
		this._goBack = this._goBack.bind(this);
	}

	fetchCoords() {
		this.props.dispatch(fetchUser());
	}

	render() {
		const { user } = this.props;
		return (
			<View style={styles.container}>
				<Text>Send Location to Dispatch</Text>
			  <TappableRow
			  	text="Go Back"
			  	onPress={this._goBack}
			  />
				<Text>
					<Text>{"\n"}Map Coordinates {"\n"}Longitude: {user.initialLong}{"\n"}</Text>
					<Text>Latitude: {user.initialLat}</Text>
					{"\n"}
				</Text>
				<TappableRow
					text="Share Location"
					onPress={this.fetchCoords.bind(this)}
				/>
			</View>
		)
	}

	_goBack() {
		if (this.props.navigationState.index === 0) {
			return false
		}
		this.props._goBack()
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5F5F5',
	},
	button: {
		height: 90,
		width: 210,
		backgroundColor: "#669966",
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 25,
		color: "white",
	},
})

export default connect((store) => {
	return {
		user: store.user.user,
		userFetched: store.user.fetched,
	};
})(TestComp);