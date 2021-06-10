import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
            redirect: false
        }
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }
    dismissError() {
        this.setState({
            error: ''
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        if (!this.state.username) {
            return this.setState({
                error: 'Username is required'
            });
        }
        if (!this.state.password) {
            return this.setState({
                error: 'Password is required'
            });
        }
        return this.setState({
            error: '',
            redirect: true
        })
    }
    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };
    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    };
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/Dashboard' />
        }
    }
    render() {
        return (
            <div>
                <form>
                    <table>
                        <tr>
                            <th> <p>User Name:</p></th>
                            <td> <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} /></td>
                        </tr>
                        <tr>
                            <th> <p>Password:</p></th>
                            <td> <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} /></td>
                        </tr>
                    </table>
                </form>
                {this.renderRedirect()}
                <button onClick={this.handleSubmit}>login</button>
                {
                    this.state.error &&
                    <h3 data-test="error" onClick={this.dismissError}>
                        <button onClick={this.dismissError}>✖</button>
                        {this.state.error}
                    </h3>
                }
            </div>
        )
    }
}
export default Login;