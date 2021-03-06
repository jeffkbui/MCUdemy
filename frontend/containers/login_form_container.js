import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import SessionForm from '../components/SessionForm';
import { openModal, closeModal } from '../actions/modal_actions';
import React from 'react';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    openSignupModal: () => dispatch(openModal('signup')),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);