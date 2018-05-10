import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Wrapper extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <ul>
                    <li><NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink activeClassName="active" to="/user">User</NavLink></li>
                </ul>
                <Link to="/">Logout</Link>
                {this.props.children}
            </div>
        )
    }
}