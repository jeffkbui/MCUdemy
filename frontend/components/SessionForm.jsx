import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { first_name: '', last_name: '', email: '', password: '', buttonClicked: false}
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

    renderLoginErrors() {
        return(
            <ul>
                {this.props.errors.slice(2).map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
                ))}
            </ul>
        );
    }

    renderSignupErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
          this.props.formType === 'signup' ? (
            <div className='session-forms'>
            <form onSubmit={this.handleSubmit}>
            <header className='form-header'>Sign Up and Start Learning!</header> 
              {this.state.buttonClicked&&this.renderSignupErrors()}
              <div>
                <br/>
                <input className='form-credentials' type="text" value='First Name' onChange={this.update('first_name')}/>
                <br/>
                <input className='form-credentials' type="text" value='Last Name' onChange={this.update('last_name')}/>
                <br/>
                <input className='form-credentials' type="text" value='Email' onChange={this.update('email')}/>              
                <br/>               
                <input className='form-credentials' type="password" value='Password' onChange={this.update('password')} />       
                <br/>
                <input type="submit" value='Sign Up'/>
              </div>
            </form>
          </div>
          ) : (
            <div className='session-forms'>
            <form onSubmit={this.handleSubmit}>
              <header className='form-header'>Log In to Your MCUdemy Account!</header> 
              {this.state.buttonClicked&&this.renderLoginErrors()}
              <div>
                <input className='form-credentials' type="text" value='Email' onChange={this.update('email')}/>
                <br/>
                <input className='form-credentials' type="password" value='Password' onChange={this.update('password')} />
                <br/>
                <input type="submit" value='Log In'/>
              </div>
            </form>
          </div>
          )
        );
    }
    
}

export default SessionForm;