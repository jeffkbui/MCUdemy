import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {

    const loggedOutGreeting = () => (
        <div className='buttons'>
            <button className='login' onClick={() => openModal('login')}>Log In</button>
            
            <button className='signup' onClick={() => openModal('signup')}>Sign Up</button>
        </div>
    )

    const loggedInGreeting = () => (
        <div>
            <h2>Hi, {currentUser.first_name}!</h2>
            <br/>
            <button onClick={logout}>Logout</button>
        </div>
    )
    return currentUser ? loggedInGreeting() : loggedOutGreeting()
}

export default Greeting;