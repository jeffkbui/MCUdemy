import React from 'react';
import { Link } from 'react-router-dom';
import CourseContent from './CourseContent';
import Overview from './Overview';
import QA from './QA';
import Bookmarks from './Bookmarks';
import Announcements from './Announcements';

class LectureShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {component: (<Overview />)}
    }

    componentDidMount() {
        this.props.fetchLecture(this.props.match.params.lectureId)
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.lecture.id != this.props.match.params.lectureId) {
            this.props.fetchLecture(this.props.match.params.lectureId)
        }
    }

    render() {
        return (
            <div>

                <div className='lecture-show-header'>
                    <div className='lecture-header-logo'>
                        <Link to='/' className='lecture-header-main-logo'>MCU</Link><Link to='/' className='lecture-header-logo'>demy</Link>
                    </div>
                    <div className='lecture-show-header-line'></div>
                    <div className='lecture-show-header-title'>
                        {this.props.lecture.title}
                    </div>
                </div>

                <iframe 
                    id="ytplayer" 
                    type="text/html" 
                    width="1280"
                    height="575" 
                    src="https://www.youtube.com/embed/hFRDkSR2OEo?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
                    frameBorder="0"> 
                </iframe>

                <div className='course-nav-header'>
                    <div className='course-content' onClick={() => this.setState({component: (<CourseContent />)})}>
                        Course content
                    </div>
                    <div className='overview' onClick={() => this.setState({component: (<Overview />)})}>
                        Overview
                    </div>
                    <div className='qa' onClick={() => this.setState({component: (<QA />)})}>
                        QA
                    </div>
                    <div className='bookmarks' onClick={() => this.setState({component: (<Bookmarks />)})}>
                        Bookmarks
                    </div>
                    <div className='announcements' onClick={() => this.setState({component: (<Announcements />)})}>
                        Announcements
                    </div>
                </div>
                
                <div className='course-nav-line'></div>

                <div className='lecture-content-main-container'>
                    {this.state.component}
                </div>

                <div className='lecture-show-footer-2'>
                    <div className='header-logo'>
                        <Link to='/' className='logo2'>MCU</Link><Link to='/' className='header-logo'>demy</Link>
                    </div>
                    <div className='copyright'>Copyright 2019 MCUdemy, Inc.</div>
                </div>

            </div>
        )
    }
}

export default LectureShow;