import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal_actions';
import CourseShow from '../components/CourseShow';
import { fetchCourse } from '../actions/course_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        course: state.entities.courses[ownProps.match.params.courseId] || {},
        ui: state.ui
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchCourse: (id) => dispatch(fetchCourse(id)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseShow);