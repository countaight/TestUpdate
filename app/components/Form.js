import React, { Component } from 'react';
import {
	Text,
	TextInput,
	TouchableHighlight,
	View
} from 'react-native';

class Form extends Component {
	focusNextField (nextField) {
		this.refs[nextField].focus();
	}

	_onChange (field, text) {
		this.props.onChangeTxt(field, text);
	}

	_submit () {
		this.props.submitForm(this.props.formFields)
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.formContainer}>
					<Text style={styles.text}>
						Login
					</Text>
					<View style={{backgroundColor: '#EEE'}}>
						<Text style={{padding: 5, backgroundColor: "#DDD", height: 35, fontFamily: 'Montserrat-Regular',textAlignVertical: 'bottom'}}>Email</Text>
						<TextInput
							keyboardType={"email-address"}
							onChangeText={this._onChange.bind(this, "email")} 
							onSubmitEditing={() => this.focusNextField('2')}
							placeholder={"Email"}
							ref={'1'}
							returnKeyType={'next'} 
							style={styles.input}
						/>
					</View>
					<TextInput 
						onChangeText={this._onChange.bind(this, "password")}
						onSubmitEditing={this._submit.bind(this)} 
						placeholder={"Password"} 
						ref={'2'} 
						returnKeyType={'done'} 
						secureTextEntry={true} 
						style={styles.input} 
					/>
					<TouchableHighlight
						disabled={this.props.formFields.email.length === 0}
						onPress={this._submit.bind(this)}
						style={styles.button}
						underlayColor="#9cc59c"
					>
						<Text style={styles.buttonText}>Log In</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}


}

const styles = {
	button: {
		height: 50,
		width: 250,
		backgroundColor: '#669966',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		fontFamily: 'ReemKufi-Regular',
		color: 'white',
		fontSize: 18,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	formContainer: {
		backgroundColor: 'white',
		padding: 10,
		alignItems: 'center',
	},
	input: {
		fontFamily: 'Montserrat-Regular',
		fontSize: 16,
		height: 40,
		width: 250,
		borderColor: '#669966',
		borderWidth: 2,
	},
	text: {
		fontSize: 30,
		fontFamily: 'Montserrat-Regular',
		paddingBottom: 20,
	},
}

export default Form