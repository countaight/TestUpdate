import { connect } from 'react-redux';
import TabsRoot from '../components/TabsRoot';
import { changeTab, pop, push } from '../actions/navActions';

function mapStateToProps (state) {
  return {
    tabs: state.tabReducer,
  }
}

export default connect(
  mapStateToProps,
  {
    changeTab: (route) => changeTab(route),
    pushRoute: (route) => push(route),
		popRoute: () => pop()
  }
)(TabsRoot)