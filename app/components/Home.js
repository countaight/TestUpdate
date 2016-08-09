import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import TappableRow from './TappableRow';

const route = {
	type: 'push',
	route: {
		key: 'Locator',
	}
}

class Home extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Home</Text>
				<TappableRow onPress={() => this.props._handleNavigate(route)} text="Go to Share Location" />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		marginBottom: 20,
		fontSize: 22,
		textAlign: 'center',
	},
	container: {
		flex: 1,
		paddingTop: 0,
	}
})

export default Home