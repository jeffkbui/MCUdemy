import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import React from 'react';
import VideoModal from '../components/VideoModal';

const mapStateToProps = (state, ownProps) => {
    return ({
        course: state.entities.courses[ownProps.match.params.courseId] || {}
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoModal)