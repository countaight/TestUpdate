import { connect } from 'react-redux';

import SimpleNavigator from '../components/SimpleNavigator';
import { push, pop } from '../actions/navActions';

function mapStateToProps(state) {
	return {
		navigationState: state.navReducer
	}
}

export default connect(
	mapStateToProps,
	{
		pushRoute: (route) => push(route),
		popRoute: () => pop()
	}
	)(SimpleNavigator)