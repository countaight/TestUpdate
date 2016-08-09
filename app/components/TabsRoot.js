
import React, { Component } from 'react';
import { BackAndroid, NavigationExperimental, StyleSheet, Text, ToolbarAndroid, View } from 'react-native';

import Home from './Home';
import Recipes from './Recipes';
import Samples from './Samples';
import TabsModule from './Tabs';
import TappableRow from './TappableRow';
import TestComp from './TestComp';

const {
	CardStack: NavigationCardStack
} = NavigationExperimental;

export default class Tabs extends Component {
	constructor (props) {
		super(props);
		this._renderScene = this._renderScene.bind(this);
		this._handleBackAction = this._handleBackAction.bind(this);
	}

	componentDidMount () {
		BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
	}

	componentWillUnmount () {
		BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
	}

	_handleBackAction () {
		this.props.popRoute();
		return true
	}

	_handleNavigate (action) {
		switch (action.type) {
			case 'push': {
				this.props.pushRoute(action.route);
				return true;
			}
			case 'back':
			case 'pop': {
				return this._handleBackAction();
			}
			default: {
				return false;
			}
		}
	}

	render() {
		console.log(this.props)
		const { tabs } = this.props.tabs;
		const tabKey = tabs.routes[tabs.index].key;
		const scenes = this.props.tabs[tabKey];
		return (
			<View style={styles.navigate}>
				<NavigationCardStack
					key={'stack_' + this.tabKey }
					onNavigate={this._handleNavigate}
					navigationState={scenes}
					renderScene={this._renderScene}
					style={styles.navigatorCardStack}
				/>
				<TabsModule changeTab={this.props.changeTab} navigationState={tabs}/>
			</View>
		);
	}

	_renderScene(sceneProps) {
		const { route } = sceneProps.scene
		if (route.key === 'Home') {
			return (
				<Home
					{...sceneProps}
					_handleNavigate={this._handleNavigate.bind(this)}
				/>
			)
		}

		if (route.key === 'Locator') {
			return (
				<TestComp
					{...sceneProps}
					_goBack={this._handleBackAction}
				/>
			)
		}

		if (route.key === 'Samples Home') {
			return (
				<Samples
				_handleNavigate={this._handleNavigate.bind(this)}
				/>
			)
		}

		if (route.key === 'Recipes Home') {
			return (
				<Recipes _handleNavigate={this._handleNavigate.bind(this)} />
			)
		} else {
			return <Text>{JSON.stringify(route)}</Text>
		}
	}
}

const styles = StyleSheet.create({
  navigate: {
  	flex: 1
  },
  navigatorCardStack: {
  	flex: 20
  },
});