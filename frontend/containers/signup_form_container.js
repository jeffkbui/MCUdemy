import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
import SessionForm from '../components/SessionForm';
import { openModal, closeModal } from '../actions/modal_actions';
import React from 'react';

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    openLoginModal: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);