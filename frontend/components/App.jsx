import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CourseShowContainer from '../containers/course_show_container';
import CourseIndexContainer from '../containers/course_index_container'
import SplashContainer from '../containers/splash_container';
import LectureIndexContainer from '../containers/lecture_index_container';
import LectureShowContainer from '../containers/lecture_show_container';
import EditUserContainer from '../containers/edit_user_container';
import SearchCoursesContainer from '../containers/search_courses_container';

const App = () => (
    <div>
        <Switch> 
            <Route exact path="/" component={SplashContainer} />
            <Route exact path="/api/search-courses/" component={SearchCoursesContainer} />
            <Route exact path="/api/courses/:courseId" component={CourseShowContainer} />
            <Route exact path="/api/lectures/" component={LectureIndexContainer} />
            <Route exact path="/api/lectures/:lectureId" component={LectureShowContainer} />
            <Route exact path="/api/users/:userId/edit" component={EditUserContainer} />
        </Switch> 
    </div>
);

export default App;