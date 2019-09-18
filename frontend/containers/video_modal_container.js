import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions';
import React from 'react';
import VideoModal from '../components/VideoModal';
import { fetchCourse } from '../actions/course_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        courses: state.entities.courses || {}
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        closeModal: () => dispatch(closeModal()),
        fetchCourse: (id) => dispatch(fetchCourse(id)),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoModal)