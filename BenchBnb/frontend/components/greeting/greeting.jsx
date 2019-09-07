/*
Greeting
If the user is logged in, then the Greeting should contain:

A welcome message including the user's username
A button to logout
If the user is not logged in, then the Greeting should contain:

A <Link to> /signup
A <Link to> /login
*/

import React from 'react';
import { Link } from 'react-router-dom';

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { currentUser } = this.props;

        return (
            <div>
                <h1>{currentUser} ? `Welcome, ${currentUser.username}!` : ""}</h1>

                {currentUser ? <button onClick={this.props.logout}>Log Out</button> : 
                    <div>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">Log In</Link>
                    </div>
                }
            </div>
        )
    }
}