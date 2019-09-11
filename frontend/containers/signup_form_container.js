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
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
          Sign Up
        </button>
      ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);