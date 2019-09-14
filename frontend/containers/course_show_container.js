import React from 'react';
import { connect } from 'react-redux';
import CourseShow from '../components/CourseShow';
import { fetchCourse } from '../actions/course_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        course: state.entities.courses[ownProps.match.params.courseId] || {}
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchCourse: (id) => dispatch(fetchCourse(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseShow);