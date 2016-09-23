import React, { Component } from 'react';
import {
	ActivityIndicator,
	Animated,
	Image,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

import Form from './Form';
import TappableRow from './TappableRow';

class Home extends Component {
	constructor (props) {
		super(props);
		this.state = {
			fadeAnim: new Animated.Value(0)
		}
	}

	componentDidMount () {
		Animated.timing(
			this.state.fadeAnim,
			{toValue: 1}
		).start();
	}

	_getStyle () {
		return [
			styles.container,
			{
				opacity: this.state.fadeAnim,
				transform: [{
					translateY: this.state.fadeAnim.interpolate({
	       		inputRange: [0, 1],
	       		outputRange: [150, 0]
	     		}),
				}]
			}
		]
	}

	render () {
		const { fetched, fetching } = this.props.user;

		if (fetched === false && fetching === true) {
			var view = <ActivityIndicator size="large" animating={true} />
		} else if (fetched === true && fetching === false) {
			var view = <Text style={styles.welcome}>Welcome to Noel Transportation App</Text>
		} else {
			var view = <Form formFields={{email: this.props.user.email, password: this.props.user.password}} onChangeTxt={this.props.onChangeTxt} submitForm={this.props.submitForm} />
		};
		
		return (
			<Animated.View style={this._getStyle()}>
				<Image source={require('../imgs/backdropCity.jpg')} style={styles.image}>
					{ view }
				</Image>
			</Animated.View>
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
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		height: 616,
		left: -200,
	},
	welcome: {
		fontSize: 16,
	}
})

export default Home;