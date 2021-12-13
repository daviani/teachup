import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './styles/main.css'
import data from './utils/data.json'
import Home from './pages/home'
import User from './pages/user'
import Card from './pages/card'
import Error from './pages/error'

function App () {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home data={data}/>
                </Route>
                <Route path="card">
                    <Card  data={data}/>/>
                </Route>
                <Route path="user" component={User}/>
                <Route path="*" component={Error}/>
            </Switch>
        </Router>
    )
}

export default App
