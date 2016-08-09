import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Tab from './Tab';

export default class TabsModule extends Component {
	render () {
		return (
			<View style={styles.tabs}>
				{this.props.navigationState.routes.map(this._renderTab, this)}
			</View>
		)
	}

	_renderTab (route, index) {
		return (
			<Tab
				key={route.key}
				route={route}
				selected={this.props.navigationState.index === index}
				changeTab={this.props.changeTab}
			/>
		);
	}
}

const styles = StyleSheet.create({
	tabs: {
		flex: 1,
		height: 50,
		flexDirection: 'row',
	}
})