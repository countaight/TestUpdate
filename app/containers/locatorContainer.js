import { connect } from 'react-redux';

import Locator from '../components/Locator';
import { fetchCoords } from '../actions/userActions';

function mapStateToProps(state) {
	return {
		user: state.userReducer.user
	}
}

export default connect(
	mapStateToProps,
	{
		fetchCoords: () => fetchCoords(),
	}
)(Locator)