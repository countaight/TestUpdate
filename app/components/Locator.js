import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableHighlight, View } from 'react-native';

import TappableRow from './TappableRow';

class Locator extends Component {
	_fetchCoords() {
		this.props.fetchCoords();
	}

	render() {
		const { user } = this.props;
		return (
			<View style={styles.container}>
				<Text>Send Location to Dispatch</Text>
				<Text>
					<Text>{"\n"}{user.email}{"\n"}</Text>
					<Text>{"\n"}Map Coordinates {"\n"}Longitude: {user.initialLong}{"\n"}</Text>
					<Text>Latitude: {user.initialLat}</Text>
					{"\n"}
				</Text>
				<TappableRow
					text="Share Location"
					onPress={this._fetchCoords.bind(this)}
					styles={styles}
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
		backgroundColor: '#E9E9EF',
	},
	button: {
		height: 90,
		width: 210,
		backgroundColor: '#669966',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 25,
		color: "white",
	},
})

export default Locator;