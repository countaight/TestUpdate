import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Tab extends Component {
	constructor(props) {
		super(props);
		this._onPress = this._onPress.bind(this);
	}

	render () {
		const style = [styles.tabText];
		if (this.props.selected) {
			style.push(styles.tabSelected)
		}
		
		return (
			<TouchableOpacity style={styles.tab} onPress={this._onPress}>
				<Text style={style}>
					{this.props.route.key}
				</Text>
			</TouchableOpacity>
		);
	}

	_onPress () {
		this.props.changeTab(this.props.route.key);
	}
}

const styles = StyleSheet.create({
	tab: {
		alignItems: 'center',
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
	},
	tabText: {
		color: '#222',
		fontWeight: '500',
	},
	tabSelected: {
		color: 'blue',
	}
});