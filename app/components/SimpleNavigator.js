import React, { Component } from 'react';
import { BackAndroid, NavigationExperimental } from 'react-native';

import Home from './Home';
import TestComp from './TestComp';

const { CardStack: NavigationCardStack } = NavigationExperimental;

export default class SimpleNavigator extends Component {
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
		if (this.props.navigationState.index === 0) {
			return false
		}
		this.props.popRoute();
		return true
	}

	_handleNavigate (action) {
		switch (action && action.type) {
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
		return (
			<NavigationCardStack
				onNavigate={this.__handleNavigate}
				navigationState={this.props.navigationState}
				renderScene={this._renderScene}
			/>
		);
	}

	_renderScene(sceneProps) {
		const { route } = sceneProps.scene

		if (route.key === 'home') {
			return <Home _handleNavigate={this._handleNavigate.bind(this)} />
		}

		if (route.key === 'location') {
			return (
				<TestComp
				_goBack={this._handleBackAction.bind(this)}
				/>
			)
		}
	}
}