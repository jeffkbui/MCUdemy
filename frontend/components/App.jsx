import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CourseShowContainer from '../containers/course_show_container';
import CourseIndexContainer from '../containers/course_index_container'
import Splash from './Splash';
import LectureIndexContainer from '../containers/lecture_index_container';
import LectureShowContainer from '../containers/lecture_show_container';

const App = () => (
    <div>
        <Switch> 
            <Route exact path="/" component={Splash} />
            <Route exact path="/api/courses/" component={CourseIndexContainer} />
            <Route exact path="/api/courses/:courseId" component={CourseShowContainer} />
            <Route exact path="/api/lectures/" component={LectureIndexContainer} />
            <Route exact path="/api/lectures/:lectureId" component={LectureShowContainer} />
        </Switch> 
    </div>
);

export default App;