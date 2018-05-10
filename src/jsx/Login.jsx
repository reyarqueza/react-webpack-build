import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <p>Notice that the login page has no common wrapper (with nav) that the other pages have.</p>
                <p>Continue for the sake of clicking into the spa, go to the <Link to="/dashboard">Dashboard</Link>.</p>
            </div>
        );
    }
}
