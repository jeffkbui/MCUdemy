import { connect } from 'react-redux';
import { edit, receiveCurrentUser } from '../actions/session_actions';
import EditUser from '../components/EditUser';

const mapStateToProps = (state, ownProps) => {
    let defaultUser = {first_name: '', last_name: '', email: '', password: ''};
    let user = state.entities.users[ownProps.match.params.userId] || defaultUser;
    return ({
        user,
        errors: state.errors.session
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        receiveCurrentUser: (id) => dispatch(receiveCurrentUser(id)),
        processForm: (user) => dispatch(edit(user))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);