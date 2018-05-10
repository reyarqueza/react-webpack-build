import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router, 
    Route
} from 'react-router-dom';

import Dashboard from './jsx/Dashboard.jsx';
import Login from './jsx/Login.jsx';
import User from './jsx/User.jsx';
import Wrapper from './jsx/Wrapper.jsx';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/user' component={User} />
            <Route exact path='/' component={Login} />   
        </div>
    </Router>,
    document.querySelector('main')
);
