import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import UserProfile from './UserProfile'

function Main() {
    return (
        <div className="main-panel">
            <Navbar />
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/profile" component={UserProfile} />
                <Redirect from='*' to='/dashboard' />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;