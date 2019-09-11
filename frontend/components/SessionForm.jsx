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
            <div>
            <form onSubmit={this.handleSubmit}>
            <h2>Welcome to MCUdemy!</h2> 
              {this.state.buttonClicked&&this.renderSignupErrors()}
              <h3>Please Signup</h3>
              <div>
                <label>Firstname:
                    <br/>
                  <input type="text" value={this.state.first_name} onChange={this.update('first_name')}/>
                </label>
                <br/>
                <label>Lastname:
                    <br/>
                  <input type="text" value={this.state.last_name} onChange={this.update('last_name')}/>
                </label>
                <br/>
                <label>Email:
                    <br/>
                  <input type="text" value={this.state.email} onChange={this.update('email')}/>
                </label>
                <br/>
                <label>Password:
                    <br/>
                  <input type="password" value={this.state.password} onChange={this.update('password')} />
                </label>
                <br/>
                <input type="submit" value='Signup!'/>
              </div>
            </form>
          </div>
          ) : (
            <div>
            <form onSubmit={this.handleSubmit}>
              <h2>Welcome to MCUdemy!</h2> 
              {this.state.buttonClicked&&this.renderLoginErrors()}
              <h3>Please Login</h3>
              <div>
                <label>Email:
                    <br/>
                  <input type="text" value={this.state.email} onChange={this.update('email')}/>
                </label>
                <br/>
                <label>Password:
                    <br/>
                  <input type="password" value={this.state.password} onChange={this.update('password')} />
                </label>
                <br/>
                <input type="submit" value='Login!'/>
              </div>
            </form>
          </div>
          )
        );
    }
    
}

export default SessionForm;