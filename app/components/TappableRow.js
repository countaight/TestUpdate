import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

export default class TappableRow extends Component {
	render() {
		return (
			<TouchableHighlight
				underlayColor="#9cc59c"
				style={styles.button}
				onPress={this.props.onPress}>
				<Text style={styles.buttonText}>
					{this.props.text}
				</Text>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		height: 90,
		width: 210,
		backgroundColor: "#669966",
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontFamily: 'Montserrat-Regular',
		fontSize: 25,
		color: "white",
	},
})