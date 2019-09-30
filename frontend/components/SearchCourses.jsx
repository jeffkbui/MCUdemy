import React from 'react';
import SearchCoursesItems from './SearchCoursesItems';
import { Link } from 'react-router-dom';
import GreetingContainer from '../containers/greeting_container';

class SearchCourses extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCourses();
        window.scrollTo(0, 0)
    }

    render() {
        const courses = this.props.courses.map(course => {
            return (
                <SearchCoursesItems key={course.id} course={course} ownProps={this.props}/>
            )
        })

        return (
            <div>
                <header className='header'>
                    <div className='header-logo'>
                        <Link to='/' className='logo'>MCU</Link><Link to='/' className='header-logo'>demy</Link>
                        
                    </div>
                    <div className='categories-dropdown-main-container'>
                        <div className='header-categories'>
                            <img className='categories-icon' src="https://cdn3.iconfinder.com/data/icons/faticons/32/grid-2-01-512.png" alt="categories"/>
                            Categories
                        </div>
                        <div className='categories-dropdown-body'>
                            <div className='categories-item'>
                                Thor
                            </div>
                            <div className='categories-item'>
                                Iron Man
                            </div>
                            <div className='categories-item'>
                                Captain America
                            </div>
                            <div className='categories-item'>
                                Hulk
                            </div>
                            <div className='categories-item'>
                                Thanos
                            </div>
                        </div>
                    </div>
                    <form className='header-search-bar' onSubmit={() => this.props.history.push('/api/search-courses')}>
                        <input className='search-input' type="text" placeholder='Search for anything'/>
                        <div>
                            <button className='search-submit' type="submit">
                                <img className='magnifying-icon' src="https://image.flaticon.com/icons/png/512/63/63322.png" alt=""/>
                            </button>
                        </div>
                    </form>
                    <div className='profiles-container'>
                        <a className='linkedin' href="https://www.linkedin.com/in/jeffreykbui/">LinkedIn</a>
                        <a className='github' href="https://github.com/jeffkbui/MCUdemy/wiki">GitHub</a>
                    </div>
                    <div>
                        <img className='cart-icon' src="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png" alt="cart"/>
                        <div className='cart'>Cart is empty</div>
                    </div>
                    <GreetingContainer></GreetingContainer>
                </header> 

                <div className='search-courses-title'>
                    <div className='search-results'>Results</div>
                </div>

                <div className='search-main-container'>
                    <div className='search-courses-main'>
                        {courses}
                    </div>
                    <div className='not-sure-container'>
                        <div className='not-sure'>
                            Not sure?
                        </div>
                        <div className='every-course'>
                            Every course comes with a
                        </div>
                        <div className='thirtyday'>
                            30-day money-back-guarantee
                        </div>
                    </div>
                </div>

                 

                <div className='splash-footer-main'>
                    <div className='course-show-footer-1'>
                        <div className='footer-text'>
                            Top companies choose MCUdemy to build in-demand Marvel skills.
                        </div>
                        <div className='footer-images'>
                            <img className='footer-company-image' src="https://i.udemycdn.com/partner-logos/lyft-logo.svg" alt="lyft"/>
                            <img className='footer-company-image' src="https://i.udemycdn.com/partner-logos/pinterest-logo.svg" alt="pinterest"/>
                            <img className='footer-company-image' src="https://i.udemycdn.com/partner-logos/adidas-logo.svg" alt="adidas"/>
                            <img className='footer-company-image' src="https://i.udemycdn.com/partner-logos/eventbrite-logo.svg" alt="event"/>
                            <img className='footer-company-image' src="https://i.udemycdn.com/partner-logos/surveymonkey-logo.svg" alt=""/>
                            <img className='footer-company-image' src="https://i.udemycdn.com/partner-logos/booking-logo.svg" alt="booking"/>
                        </div>
                    </div>
                    <div className='course-show-footer-2'>
                        <div className='header-logo'>
                            <Link to='/' className='logo2'>MCU</Link><Link to='/' className='header-logo'>demy</Link>
                        </div>
                        <div className='copyright'>Copyright 2019 MCUdemy, Inc.</div>
                        
                    </div>
                </div>

            </div>
        ) 
    }

}

export default SearchCourses;