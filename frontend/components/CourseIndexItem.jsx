import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CourseIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect() {
        debugger;
        this.props.history.push(`/api/courses/${this.props.course.id}`)
        debugger;
    }

    render() {
        return (
            <Link onClick={this.handleRedirect}> {this.props.course.title}</Link>
        )
    }
}

export default withRouter(CourseIndexItem);