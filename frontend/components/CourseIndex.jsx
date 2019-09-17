import React from 'react';
import CourseIndexItem from './CourseIndexItem';

class CourseIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCourses();
    }

    render() {
        const courses = this.props.courses.map(course => {
            return (
                <CourseIndexItem key={course.id} course={course} ownProps={this.props}/>
            )
        })

        return (
            <div>
                <div className='course-index-title'>
                    Students are viewing
                </div>
                 <div className='course-index-main'>
                    {courses}
                </div>
            </div>
        ) 
    }
}

export default CourseIndex;