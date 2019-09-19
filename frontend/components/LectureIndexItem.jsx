import React from 'react';
import { Link } from 'react-router-dom';

class LectureIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect() {
        this.props.ownProps.history.push(`/api/lectures/${this.props.lecture.id}`)
    }

    render() {
        return (
            <div className='my-courses-course' onClick={this.handleRedirect}>
                <div className='my-courses-thumbnail'>

                </div>
                <div className='my-courses-title'>
                    {this.props.lecture.title}
                </div>
                <div className='my-courses-instructor'>
                    Odin Makes
                </div>
                <div className='my-couse-divider'>

                </div>
                <div className='start-course'>
                    START COURSE
                </div>
            </div>
        )
    }
}

export default LectureIndexItem;