import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import LoginFormContainer from '../containers/login_form_container';
import SignupFormContainer from '../containers/signup_form_container';
import VideoModalContainer from '../containers/video_modal_container';

const Modal = ({modal, closeModal, course}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'video':
      component = <VideoModalContainer course={course}/>
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);