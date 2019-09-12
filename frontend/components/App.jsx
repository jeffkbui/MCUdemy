import React from 'react';
import GreetingContainer from '../containers/greeting_container';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const App = () => (
    <div>
        <Modal />
        <header className='header'>
            <div className='header-logo'>
                <Link to='/' className='logo'>MCU</Link><Link to='/' className='header-logo'>demy</Link>
                
            </div>
            <div className='header-categories'>
                <img className='categories-icon' src="https://cdn3.iconfinder.com/data/icons/faticons/32/grid-2-01-512.png" alt="categories"/>
                Categories
            </div>
            <form className='header-search-bar'>
                <input className='search-input' type="text" placeholder='Search for anything'/>
                <div>
                    <button className='search-submit' type="submit">
                        <img className='magnifying-icon' src="https://image.flaticon.com/icons/png/512/63/63322.png" alt=""/>
                    </button>
                </div>
            </form>
            <div>
                <img className='cart-icon' src="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png" alt="cart"/>
            </div>
            <GreetingContainer></GreetingContainer>
        </header> 

        <div className='splash'>
            <div className='header-text1'>Program your future</div>
            <br/>
            <div className='header-text2'>
                Get in-demand skills. Courses from $11.39. Ends 9/11, 
                <br/>
                11:59 p.m. PDT.
            </div>
        </div>

        <div className='splash2'>
            <div className='splash2-box'>
                <div>
                    <img className='mouse-icon' src="https://static.thenounproject.com/png/1179449-200.png" alt="mouseclick"/>
                </div>
                <div className='splash2-textbox'>
                    <div className='splash2-text'>
                        100,000 online courses
                    </div>
                    <div className='splash2-text2'>
                        Explore a variety of fresh topics
                    </div>
                </div>
            </div>

            <div className='splash2-box'>
                <div>
                    <img className='checkbox-icon' src="https://cdn3.iconfinder.com/data/icons/chat-and-speech-bubble/480/chat_speech_bubble_communication_interaction_-_39-512.png"/>
                </div>
                <div className='splash2-textbox'>
                    <div className='splash2-text'>
                        Expert instruction
                    </div>
                    <div className='splash2-text2'>
                        Find the right instructor for you
                    </div>
                </div>
            </div>

            <div className='splash2-box2'>
                <div>
                    <img className='clock-icon' src="https://cdn3.iconfinder.com/data/icons/photo-video-editor-set-2/48/History-512.png"/>
                </div>
                <div className='splash2-textbox2'>
                    <div className='splash2-text'>
                        Lifetime access
                    </div>
                    <div className='splash2-text2'>
                        Learn on your schedule
                    </div>
                </div>
            </div>

        </div>

    </div>
);

export default App;