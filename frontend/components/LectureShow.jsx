import React from 'react';

class LectureShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchLecture(this.props.match.params.lectureId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.lecture.id != this.props.match.params.lectureId) {
            this.props.fetchLecture(this.props.match.params.lectureId)
        }
    }

    render() {
        return (
            <div>
                LectureShow is working
                {this.props.lecture.title}
            </div>
        )
    }
}

export default LectureShow;