import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CourseShowContainer from '../containers/course_show_container';
import CourseIndexContainer from '../containers/course_index_container'
import Splash from './Splash';

const App = () => (
    <div>
        <Switch> 
            <Route exact path="/" component={Splash} />
            <Route exact path="/api/courses/" component={CourseIndexContainer} />
            <Route exact path="/api/courses/:courseId" component={CourseShowContainer} />
        </Switch> 
    </div>
);

export default App;