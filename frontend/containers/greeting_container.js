import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';
import Greeting from '../components/Greeting';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return ({
    currentUser: state.entities.users[state.session.id],
    ownProps
  })
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));