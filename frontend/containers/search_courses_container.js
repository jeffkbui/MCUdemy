import { connect } from 'react-redux';
import { fetchCourses } from '../actions/course_actions';
import SearchCourses from '../components/SearchCourses';
import React from 'react';

const mapStateToProps = (state, ownProps) => {
    debugger;
    return ({
        courses: Object.keys(state.entities.courses).map( id => state.entities.courses[id]),
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchCourses: () => dispatch(fetchCourses())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchCourses);