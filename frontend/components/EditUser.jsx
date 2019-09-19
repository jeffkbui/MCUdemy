import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../containers/greeting_container';
class EditUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
                        first_name: this.props.user.first_name, 
                        last_name: this.props.user.last_name, 
                        email: this.props.user.email, 
                        password: this.props.user.password, 
                        buttonClicked: false
                    }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return event => this.setState({
            [field]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({buttonClicked: true})
        const user = Object.assign({}, this.state);
        delete user['buttonClicked'];
        this.props.processForm(user).then(() => this.props.history.push('/'));
    }

    renderEditErrors() {
        debugger;
        return(
            <ul>
                {this.props.errors.map((error, i) => {
                return (
                <div className='errors' key={`error-${i}`}>
                    {error}
                </div>
                )
                })}
            </ul>
        );
    }

    render() {
    
        return (
            <div>
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
                <form onSubmit={this.handleSubmit}>
                    <header className='form-header'>Account</header> 
                    <br/>
                    <div className='line'></div>
                    <div>
                        <br/>
                        {this.state.buttonClicked&&this.renderEditErrors()}
                        <div className='form-box'>
                            <input className='form-credentials' type="text" value={this.state.first_name} onChange={this.update('first_name')}/>
                        </div>
                        <br/>
                        <div className='form-box'>
                            <input className='form-credentials' type="text" value={this.state.last_name} onChange={this.update('last_name')}/>
                        </div>
                        <br/>
                        <div className='form-box'>
                            <input className='form-credentials' type="text" value={this.state.email} onChange={this.update('email')}/>              
                        </div>
                        <br/> 
                        <div className='form-box'>             
                            <input className='form-credentials' type="password" placeholder='Password' onChange={this.update('password')} />       
                        </div>   
                        <br/>
                        <div>
                            <input className='credentials-submit' type="submit" value='Update Info'/>
                        </div>
                    </div>
                 </form>

                 <div className='course-show-footer-2'>
                    <div className='header-logo'>
                        <Link to='/' className='logo2'>MCU</Link><Link to='/' className='header-logo'>demy</Link>
                    </div>
                    <div className='copyright'>Copyright 2019 MCUdemy, Inc.</div>
                    
                </div>

            </div>
        )
    }
}

export default EditUser;